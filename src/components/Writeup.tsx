import React from 'react';
import canvasImage from '../assets/images/canvas.png';

const Writeup: React.FC = () => {
    return (
        <div>
            <h2 className="text-md lg:text-md font-sans font-bold mb-1 text-gray-200 italic">
                Shannon Kao
            </h2>
            <p className="text-sm font-sans text-gray-200 leading-tight">
                Code, design, words, videos, etc.
                <br />
                Based in Toronto, roots in Vancouver & Taipei.
                <br />
                <br />
                Get in touch: <a style={{ textDecoration: 'underline', pointerEvents: 'auto' }} href="mailto:hello@kaoshannon.com" className="text-sm text-gray-200">hello@kaoshannon.com</a>
            </p>
        </div>
    );
};

export default Writeup;
