'use client'
import { useEffect, useRef } from "react";

export default function AnimationPage() {
    const sectionsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            sectionsRef.current.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const triggerPoint = window.innerHeight / 0.5;

                if (sectionTop < triggerPoint) {
                    section.classList.add(styles.active);
                } else {
                    section.classList.remove(styles.active);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="sectionContainer">
                {[1, 2, 3, 4].map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => (sectionsRef.current[index] = el)}
                        className="section"
                    >
                        Section {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
