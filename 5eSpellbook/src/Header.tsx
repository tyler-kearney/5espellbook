import 'react'

interface HeaderProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

function Header({ searchQuery, setSearchQuery }: HeaderProps) {
    return (
        <header className="max-w-7xl mx-auto px-6 py-12 text-center">
            <h1 className="text-5xl font-black text-orange-500 tracking-tighter mb-4">SPELLCASTER'S TOME</h1>

            <p className="text-zinc-500 mb-8 max-w-2xl mx-auto">
                A curated collection of ancient incantations, weaver's secrets, and divine manifestations.
            </p>

            <div className="relative max-w-xl mx-auto">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search incantations..."
                    className="w-full bg-zinc-900/50 border border-zinc-800 p-4 pl-12 rounded-full focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all text-zinc-200"
                />
                {/* Simple Magnifying Glass Placeholder */}
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600">🔎</span>
            </div>
        </header>
    );
}

export default Header;