import { useState, useEffect } from 'react'
import './App.css'
import type { Spell } from './types.ts';
import Header from './Header.tsx';
import SpellShelf from './SpellShelf.tsx';
import ControlPanel from './ControlPanel.tsx';
import QuickViewModal from './QuickViewModal.tsx';
import Footer from "./Footer.tsx"



export const fetchSpells = async (): Promise<Spell[]> => {
  const response = await fetch('https://www.dnd5eapi.co/api/spells');
  const data = await response.json();

  const detailPromises = data.results.map((s: { url: string }) => {
  return fetch(`https://www.dnd5eapi.co${s.url}`)
    .then((res) => res.json());
  });

  return Promise.all(detailPromises);
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
        const data = await fetchSpells().then((data) => {
          setAllSpells(data);
        });
      } catch (error) {
        console.error("The weave is broken:", error);
      } finally {
        setLoading(false);
      }
    }
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
    </div>);
    <Footer />
}

export default App
