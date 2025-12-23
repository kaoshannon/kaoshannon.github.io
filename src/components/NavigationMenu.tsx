import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationMenu: React.FC = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') setOpen(false);
        }
        function onClick(e: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
        }

        document.addEventListener('keydown', onKey);
        document.addEventListener('mousedown', onClick);
        return () => {
            document.removeEventListener('keydown', onKey);
            document.removeEventListener('mousedown', onClick);
        };
    }, []);

    const handleNavigate = (path: string) => {
        navigate(path);
        setOpen(false);
    };

    return (
        <div className="fixed z-menu bottom-4 right-4 sm:bottom-32 sm:right-6 lg:right-8 lg:top-1/2 lg:transform lg:-translate-y-1/2">
            {/* Desktop / tablet: keep existing menu visible at sm+ */}
            <nav className="hidden sm:block space-y-2 sm:space-y-4 lg:space-y-6">
                <button
                    onClick={() => navigate('/portfolio')}
                    className="block text-right font-serif italic text-sm sm:text-base lg:text-lg text-white hover:text-yellow-200 transition-colors"
                >
                    portfolio →
                </button>
                <button
                    onClick={() => navigate('/theatre')}
                    className="block text-right font-serif italic text-sm sm:text-base lg:text-lg text-white hover:text-yellow-200 transition-colors"
                >
                    theatre →
                </button>
                <button
                    onClick={() => navigate('/')}
                    className="block text-right font-serif italic text-sm sm:text-base lg:text-lg text-white hover:text-yellow-200 transition-colors"
                >
                    listening room →
                </button>
            </nav>

            {/* Mobile: hamburger + popover */}
            <div className="sm:hidden" ref={menuRef}>
                <button
                    aria-expanded={open}
                    aria-controls="mobile-nav"
                    onClick={() => setOpen((s) => !s)}
                    className="p-3 rounded-lg text-white"
                >
                    <span className="sr-only">Toggle navigation</span>
                    {/* simple hamburger icon */}
                    <svg
                        className={`w-8 h-8 transform transition-transform duration-200 ${open ? 'rotate-90' : 'rotate-0'}`}
                        viewBox="0 0 24 24"
                        stroke="#fff"
                        strokeWidth={2}
                        strokeLinecap="round"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                    >
                        <path d="M3 6h18M3 12h18M3 18h18" />
                    </svg>
                </button>

                <div
                    id="mobile-nav"
                    className={`origin-bottom-right absolute bottom-16 right-0 mt-2 w-48 p-0 transform transition-all ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
                >
                    <nav className="space-y-2">
                        <button
                            onClick={() => handleNavigate('/portfolio')}
                            className="block text-right font-serif italic text-sm text-white w-full"
                        >
                            portfolio →
                        </button>
                        <button
                            onClick={() => handleNavigate('/theatre')}
                            className="block text-right font-serif italic text-sm text-white w-full"
                        >
                            theatre →
                        </button>
                        <button
                            onClick={() => handleNavigate('/')}
                            className="block text-right font-serif italic text-sm text-white w-full"
                        >
                            listening room →
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavigationMenu;