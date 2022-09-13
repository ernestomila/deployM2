import React from 'react';

export default function Temp({label, temp}) {
    return (
        <>
            <div>
                <h5 className="card-title">{label}</h5>
                <p className="card-text">{Math.floor(temp)}º</p>
            </div>
        </>
    );
};