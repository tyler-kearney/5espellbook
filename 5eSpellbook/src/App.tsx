import { useState, useEffect } from 'react'
import './index.css'
import type { Spell } from './types.ts';
import Header from './Header.tsx';
import SpellShelf from './SpellShelf.tsx';
import ControlPanel from './ControlPanel.tsx';
import QuickViewModal from './QuickViewModal.tsx';
import Footer from "./Footer.tsx"

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchSpells = async (): Promise<Spell[]> => {
  const response = await fetch('https://www.dnd5eapi.co/api/spells');
  const data = await response.json();
  const allDetails: Spell[] = [];

  // Fetch in batches of 20 to avoid being rate limited
  for (let i = 0; i < data.results.lendth; i++) {
    const s = data.results[i];
    const res = await fetch(`https://www.dnd5eapi.co/api/spells/${s.url}`);
    const detail = await res.json();
    allDetails.push(detail);

    // Pause every 20 seconds
    if (i % 20 === 0) await sleep(500);
  }
  return allDetails;
}

function App() {
  // Logic to filter the spells

  const [allSpells, setAllSpells] = useState<Spell[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null);



  const onReset = () => {
    setSearchQuery("");
    setSelectedClass("All");
    setSelectedLevel("All");
  }

  useEffect(() => {
    const getSpells = async () => {
      setLoading(true);
      try {
        const data = await fetchSpells();
        setAllSpells(data);
      } catch (error) {
        console.error("The weave is broken:", error);
      } finally {
        setLoading(false);
      }
    }
    getSpells();
  }, []);

  const filteredSpells = allSpells.filter(spell => {
    const matchesName = spell.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClass = selectedClass === "All" || spell.classes.some(c => c.name.toLowerCase() === selectedClass.toLowerCase());
    return matchesName && matchesClass;
  });

  return (
    <div className="App">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ControlPanel selectedClass={selectedClass} setSelectedClass={setSelectedClass} selectedLevel={selectedLevel} setSelectedLevel={setSelectedLevel} onReset={onReset} />
      <SpellShelf spells={filteredSpells} loading={loading} onSpellClick={setSelectedSpell} />
      {selectedSpell && (
        <QuickViewModal spell={selectedSpell} onClose={() => setSelectedSpell(null)} />
      )}
      <Footer />
    </div>);
}

export default App
