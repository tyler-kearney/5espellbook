import type { Spell } from './types.ts';

interface SpellCardProps {
    spell: Spell;
    onOpen: () => void; // Callback is in SpellShelf.tsx
}

function SpellCard({ spell, onOpen }: SpellCardProps) {
    {/* Component acts as a template for the SpellShelf component */}
    return (
        <div className="group relative bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl hover:border-orange-500/50 hover:bg-zinc-900 transition-all duration-300 flex flex-col justify-between h-full">
            <div>
                {/* Top Header: Level, School, and Favorite Button */}
                <div className="flex justify-between items-start mb-4">
                    <span className="text[10px] font-bold uppercase tracking-widest text-orange-500/10 px-2 py-1 rounded">
                        Level {spell.level} {spell.school.name}
                    </span>
                    <button className="text-zinc-700 hover:text-red-500 transition-colors cursor-pointer">
                        ❤️
                    </button>
                    {/* Spell Title */}
                    <h2 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-orange-500 transition-colors">
                        {spell.name}
                    </h2>
                    {/* Spell Description: Clamped to 3 lines for consistent grid height */}
                    <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 mb-6">
                        {spell.desc[0]}
                    </p>
                </div>

                <div className="space-y-4">
                    {/* Quick Stats */}
                    <div className="flex justify-between text-[10px] text-zinc-500 uppercase font-bold tracking-tighter border-t border-zinc-800 pt-4">
                        <div className="flex flex-col">
                            <span className="text-zinc-600">Casting Time</span>
                            <span className="text-zinc-100">{spell.casting_time}</span>
                        </div>
                        <div className="flex flex-col text-right">
                            <span className="text-zinc-600">Range</span>
                            <span className="text-zinc-100">{spell.range}</span>
                        </div>
                    </div>

                    <button className="w-full py-2.5 bg-zinc-800 text-zinc-300 text-[10px] font-bold uppercase rounded-lg tracking-widest hover:bg-orange-600 hover:text-white transition-all"
                        onClick={onOpen}
                    >
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SpellCard;