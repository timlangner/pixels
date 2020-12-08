import React, { useState } from 'react';
import './editor.scss';

const Editor = () => {
    return (
        <div id="editor">
            <h1>Pixel Editor</h1>
            <h2>Enter Panel Dimensions</h2>

            <div id="options">
                <div className="option">
                    <input type="number" className="panelInput" />
                    <span>Width</span>
                </div>
                <div className="option">
                    <input type="number" className="panelInput" />
                    <span>Height</span>
                </div>
            </div>
        </div>
    );
};

export default Editor;
