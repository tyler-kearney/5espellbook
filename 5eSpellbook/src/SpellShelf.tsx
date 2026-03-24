import 'react'
import './index.css'
import type { Spell } from './types.ts';
import SpellCard from './SpellCard.tsx';

interface SpellShelfProps {
    spells: Spell[];
    loading: boolean;
    onSpellClick: (spell: Spell) => void; // Setter function
}

function SpellShelf({ spells, loading, onSpellClick }: SpellShelfProps) {
    // Loading state
    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20 w-full">
                <div className="w-12 h-12 border-4 border-zinc-800 border-t-orange-500 rounded-full animate-spin mb-4"></div>
                <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.2em]">Summoning Spells....</p>
            </div>
        );
    }
    // Empty State
    if (spells.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-32 w-full border border-dashed border-zinc-800 rounded-3xl">
                <p className="text-zinc-600 italic font-serif text-lg">
                    "The pages remain blank... the weave provides no answers for this search."
                </p>
            </div>
        );
    }

    // The Grid
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {spells.map((spell) => (
                <SpellCard key={spell.index} spell={spell} onOpen={() => onSpellClick(spell)} />
            ))}
        </div>
    )
}

export default SpellShelf;