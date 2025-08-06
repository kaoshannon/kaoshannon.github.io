import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationMenu: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed z-20 bottom-4 right-4 sm:bottom-32 sm:right-6 lg:right-8 lg:top-1/2 lg:transform lg:-translate-y-1/2">
            <nav className="space-y-2 sm:space-y-4 lg:space-y-6">
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
        </div>
    );
};

export default NavigationMenu;