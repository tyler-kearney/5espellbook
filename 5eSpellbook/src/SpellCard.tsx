import type { Spell } from './types.ts';

interface SpellCardProps {
    spell: Spell;
}

function SpellCard({ spell }: SpellCardProps) {
    {/* Component acts as a template for the SpellShelf component */}
    return (
        <div className="group relative bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl hover:border-orange-500/50 hover:bg-zinc-900 transition-all duration-300 flex flex-col justify-between h-full">
            
        </div>
    )
}
