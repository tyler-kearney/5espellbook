import 'react'
import './index.css'
import type { Spell } from './types.ts'

interface QuickViewModalProps {
    spell: Spell;
    onClose: () => void;
}

function QuickViewModal({ spell, onClose }: QuickViewModalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop: Darkens the rest of the site */}
            <div
                className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal Content: "Infernal Blossom" Design */}
            <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden animate-in fade-in duration-300">
                {/* Header Section */}
                <div className="p-8 pb-0 flex fustify-between items-start">
                    <div>
                        <span className="text-xs font-bold text-orange-500 uppercase tracking-[0.2em] mb-2 block">
                            {spell.level === 0 ? "Cantrip" : `Level ${spell.level}`} {spell.school.name}
                        </span>
                        <h2 className="text-4xl font-black text-white tracking-tight">{spell.name}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-zinc-500 hover:text-white transition-colors"
                    >
                        X
                    </button>
                </div>

                {/* Stat Block */}
                <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-zinc-800/50">
                    <Stat label="Casting Time" value={spell.casting_time} />
                    <Stat label="Range" value={spell.range} />
                    <Stat label="Components" value={spell.components.join(", ")} />
                    <Stat label="Duration" value={spell.duration} />
                </div>
                {/* Description */}
                <div className="p-8 max-h-[50vh] overflow-y-auto custom-scrollbar">
                    <div className="space-y-4 text-zinc-300 leading-relaxed font-serif text-lg">
                        {spell.desc.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    {/* Spell Properties */}
                    <div className="mt-8 pt-8 border-t border-zinc-800">
                        <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Spell Properties</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                            <Property label="Concentration" value={spell.concentration ? "Yes" : "No"} />
                            <Property label="Classes" value={spell.classes.map(c => c.name).join(", ")} />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 bg-zinc-950/50 border-t border-zinc-800 flex justify-end">
                    <button
                        className="px-6 py-2 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-500 transition-colors shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                        >
                            Add to Spellbook
                    </button>
                </div>
            </div>
        </div>
    );
}

// Helper Functions
function Stat({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex flex-col">
            <span className="text-[10px] font-bold text-zinc-600 uppercase mb-1">{label}</span>
            <span className="text-zinc-300">{value}</span>
        </div>
    );
}

function Property({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex flex-col">
            <span className="text-[10px] font-bold text-zinc-600 uppercase mb-1">{label}</span>
            <span className="text-zinc-300">{value}</span>
        </div>
    );
}

export default QuickViewModal;