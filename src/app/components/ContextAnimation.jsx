"use client";
import React, { createContext, useEffect } from 'react'

export const AnimationProvider = createContext();

const ContextAnimation = ({ children }) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                    }
                });
            },
            { threshold: 0}
        );
        const elements = document.querySelectorAll(".hidden-animation");
        elements.forEach((el) => observer.observe(el));
    }, []);

    return (
        <AnimationProvider.Provider value="">
            {children}
        </AnimationProvider.Provider>
    )
}

export default ContextAnimation