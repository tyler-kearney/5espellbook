import './index.css'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-20 pb-10 border-t border-zinc-900 pt-10 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
                {/* Legal and Attribution */}
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                    Legal & Attributions
                </p>

                <p className="text-xs text-zinc-600 leading-relaxed">
                    This project utilizes the <a href="https://www.dnd5eapi.co/" target="_blank" rel="noopener noreferrer"
                    className="text-orange-500/70 hover:underline">D&D 5e API</a>. 
                    All game mechanics and spell data are sourced from the <span className="text-zinc-400">Systems Reference Document 5.1 ("SRD 5.1")</span>
                    by Wizards of the Coast, 
                    made available under the <a href="https://creativecommons.org/licenses/by/4.0" target="_blank" rel="noopener noreferrer"
                    className="text-orange-500/70 hover:underline">Creative Commons Attribution 4.0 International License</a>
                </p>
            </div>

            {/* Project License */}
            <div className="text-left md:text-right space-y-2">
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                    Project License
                </p>

                <p className="text-xs text-zinc-600">
                    &copy; {currentYear} 5e Spellbook. <br />
                    Distributed under the <span className="text-zinc-400">MIT License</span>.
                </p>
            </div>
        </footer>
    )
}

export default Footer;