import React from 'react';
import frameSquare1 from '../assets/images/frame-square-1.png';
import frameSquare2 from '../assets/images/frame-square-2.png';
import frameSquare3 from '../assets/images/frame-square-3.png';
import instagram from '../assets/icons/instagram.webp';
import linkedin from '../assets/icons/linkedin.png';
import github from '../assets/icons/github.png';
import substack from '../assets/icons/substack.png';

const SocialMediaFrames: React.FC = () => {
    return (
        <div className="mt-0 sm:mt-0 lg:mt-0 xl:mt-0 relative">
            {/* Mobile: Grid layout */}
            <div className="lg:hidden flex justify-center">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-xs sm:max-w-sm">
                    {/* Github frame */}
                    <div className="cursor-pointer flex justify-center" onClick={() => window.open('https://github.com/kaoshannon', '_blank')}>
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                            <img
                                src={frameSquare1}
                                alt="Square Frame"
                                className="w-full h-full z-10 relative"
                                style={{ pointerEvents: 'none' }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center z-0" style={{ top: '20%', left: '20%', right: '20%', bottom: '20%' }}>
                                <div className="w-full h-full flex items-center justify-center">
                                    <img src={github} alt="Github" className="w-3/4 h-3/4 object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Substack frame */}
                    <div className="cursor-pointer flex justify-center" onClick={() => window.open('https://substack.com/@kaoshannon', '_blank')}>
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                            <img
                                src={frameSquare2}
                                alt="Square Frame"
                                className="w-full h-full z-0 relative"
                            />
                            <div className="absolute inset-0 flex items-center justify-center" style={{ top: '20%', left: '20%', right: '20%', bottom: '20%' }}>
                                <div className="w-full h-full flex items-center justify-center z-10">
                                    <img src={substack} alt="substack" className="w-full h-full object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* LinkedIn frame */}
                    <div className="cursor-pointer flex justify-center" onClick={() => window.open('https://linkedin.com/in/kaoshannon', '_blank')}>
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                            <img
                                src={frameSquare3}
                                alt="Small Frame"
                                className="w-full h-full relative z-10"
                            />
                            <div className="absolute inset-0 flex items-center justify-center z-0" style={{ top: '20%', left: '20%', right: '20%', bottom: '20%' }}>
                                <img
                                    src={linkedin}
                                    alt="LinkedIn"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Instagram frame */}
                    <div className="cursor-pointer flex justify-center" onClick={() => window.open('https://instagram.com/shannon.kao', '_blank')}>
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                            <img
                                src={frameSquare1}
                                alt="Square Frame"
                                className="w-full h-full relative z-10"
                            />
                            <div
                                className="absolute inset-0 flex items-center justify-center z-0"
                                style={{
                                    top: '20%',
                                    left: '20%',
                                    right: '20%',
                                    bottom: '20%'
                                }}
                            >
                                <img
                                    src={instagram}
                                    alt="Instagram"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop: Organic positioning */}
            <div className="hidden lg:block relative" style={{ height: '100px' }}>
                {/* Email frame - top left area */}
                <div className="absolute cursor-pointer" style={{ top: '-120%', left: '40%' }} onClick={() => window.open('mailto:hello@kaoshannon.com', '_blank')}>
                    <div className="relative w-20 h-20 xl:w-24 xl:h-24">
                        <div className="absolute inset-0 flex items-center justify-center z-0" style={{ top: '20%', left: '20%', right: '20%', bottom: '20%' }}>
                            <div className="w-full h-full flex items-center justify-center">
                                <img src={github} alt="Github" className="w-3/4 h-3/4 object-contain" />
                            </div>
                        </div>
                        <img
                            src={frameSquare1}
                            alt="Square Frame"
                            className="w-full h-full z-10 relative"
                            style={{ pointerEvents: 'none' }}
                        />
                    </div>
                </div>

                {/* Substack frame - top right area */}
                <div className="absolute cursor-pointer" style={{ top: '-16%', left: '40%' }} onClick={() => window.open('https://substack.com/@kaoshannon', '_blank')}>
                    <div className="relative w-20 h-20 xl:w-24 xl:h-24">
                        <img
                            src={frameSquare2}
                            alt="Square Frame"
                            className="w-full h-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center" style={{ top: '20%', left: '20%', right: '20%', bottom: '20%' }}>
                            <div className="w-full h-full flex items-center justify-center">
                                <img src={substack} alt="substack" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* LinkedIn frame - bottom left area */}
                <div className="absolute cursor-pointer" style={{ top: '-60%', left: '35%' }} onClick={() => window.open('https://linkedin.com/in/kaoshannon', '_blank')}>
                    <div className="relative w-20 h-20 xl:w-24 xl:h-24">
                        <div className="absolute inset-0 flex items-center justify-center z-0" style={{ top: '20%', left: '20%', right: '20%', bottom: '20%' }}>
                            <img
                                src={linkedin}
                                alt="LinkedIn"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <img
                            src={frameSquare3}
                            alt="Small Frame"
                            className="w-full h-full relative z-10"
                        />
                    </div>
                </div>

                {/* Instagram frame - bottom right area */}
                <div className="absolute cursor-pointer" style={{ top: '30%', left: '30%' }} onClick={() => window.open('https://instagram.com/shannon.kao', '_blank')}>
                    <div className="relative w-20 h-20 xl:w-24 xl:h-24">
                        <img
                            src={frameSquare1}
                            alt="Square Frame"
                            className="w-full h-full relative z-10"
                        />
                        <div
                            className="absolute inset-0 flex items-center justify-center z-0"
                            style={{
                                top: '20%',
                                left: '20%',
                                right: '20%',
                                bottom: '20%',
                            }}
                        >
                            <img
                                src={instagram}
                                alt="Instagram"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default SocialMediaFrames;