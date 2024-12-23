import React from 'react'

const Brand = () => {
    return (
        <div className="relative w-full hidden-animation -translate-y-[100px] -translate-x-[100px] opacity-0 transition-all duration-1000">
            <label className="cr-wrapper">
                <input type="checkbox" />
                <div className="cr-input"></div>
                <span>Green Publications</span>
            </label>
            <label className="cr-wrapper">
                <input type="checkbox" />
                <div className="cr-input"></div>
                <span>Anando Publications</span>
            </label>
            <label className="cr-wrapper">
                <input type="checkbox" />
                <div className="cr-input"></div>
                <span>Rinku Publications</span>
            </label>
            <label className="cr-wrapper">
                <input type="checkbox" />
                <div className="cr-input"></div>
                <span>Sheba Publications</span>
            </label>
            <label className="cr-wrapper">
                <input type="checkbox" />
                <div className="cr-input"></div>
                <span>Red Publications</span>
            </label>
        </div>
    )
}

export default Brand