import React from 'react'

const Genres = () => {
    return (
        <div className="relative w-full">
            <label className="cr-wrapper">
                <input type="checkbox" />
                <div className="cr-input"></div>
                <span>History</span>
            </label>
            <label className="cr-wrapper">
                <input type="checkbox" />
                <div className="cr-input"></div>
                <span>Horror Thriller</span>
            </label>
            <label className="cr-wrapper">
                <input type="checkbox" />
                <div className="cr-input"></div>
                <span>Love Stories</span>
            </label>
            <label className="cr-wrapper">
                <input type="checkbox" />
                <div className="cr-input"></div>
                <span>Science fiction</span>
            </label>
            <label className="cr-wrapper">
                <input type="checkbox" />
                <div className="cr-input"></div>
                <span>Biography</span>
            </label>
        </div>
    )
}

export default Genres