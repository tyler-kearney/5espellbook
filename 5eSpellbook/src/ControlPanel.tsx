import { useState, useEffect } from 'react'
import './App.css'

interface ControlPanelProps {
    selectedClass: string;
    setSelectedClass: (val: string) => void;
    selectedLevel: string;
    setSelectedLevel: (val: string) => void;
    onReset: () => void;
}

const CLASSES = ["All", "Wizard", "Cleric", "Druid", "Bard", "Paladin", "Ranger", "Sorcerer", "Warlock"];
const LEVELS = ["All", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function ControlPanel({
    selectedClass,
    setSelectedClass,
    selectedLevel,
    setSelectedLevel,
    onReset
}: ControlPanelProps) {
    return (
        <aside className="space-y-8 p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl backdrop-blur-sm">
            <div>
                <h3 className="text[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">
                    Refine Your Incantations
                </h3>

                <div className="grid grid-cols-2 gap-2">
                    {CLASSES.map((cls) => (
                        <button
                            key={cls}
                            onClick={() => setSelectedClass(cls === selectedClass ? "All" : cls)}
                            className={`px-3 py-2 text-[10px] font-bold uppercase rounded-md border transition-all ${
                                selectedClass === cls
                                ? "bg-orange-500/10 border-orange-500 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.1)]"
                                : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                            }`}
                        >
                            {cls}
                        </button>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">
                    Spell Level
                </h3>

                <div className="flex flex-wrap gap-2">
                    {LEVELS.map((lvl) => (
                        <button
                            key={lvl}
                            onClick={() => setSelectedLevel(lvl === selectedLevel ? "All" : (lvl))}
                            className={`w-10 h-10 flex items-center justify-center text-xs font-bold rounded-full border transition-all ${
                                selectedLevel === lvl
                                ? "bg-orange-500 border-orange-500 text-white"
                                : "bg-zinc-900 border-zinc-800 text-zinc-500 hover:border-zinc-600"
                            }`}
                        >
                    </button>
                    ))}
                </div>
            </div>

            <button 
                onClick={onReset}
                className="w-full py-3 text-[10px] font-bold text-zinc-500 uppercase tracking-widest border border-dashed border-zinc-800 rounded-lg hover:border-orange-500/50 hover:text-orange-500 transition-all"
                >
                    Reset Filters
                </button>
        </aside>
    );
}

export default ControlPanel;