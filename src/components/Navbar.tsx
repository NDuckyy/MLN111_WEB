import React from "react";
import { useApp } from "../contexts/AppContext";

interface NavbarProps {
    currentSection: number;
    setCurrentSection: (index: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentSection, setCurrentSection }) => {
    const { state } = useApp();
    const sections = state.currentStudyContent?.sections || [];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <ul className="flex flex-wrap justify-center p-3 gap-3">
                {sections.map((section: any, idx: number) => (
                    <li key={idx}>
                        <button
                            onClick={() => setCurrentSection(idx)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition ${currentSection === idx
                                ? "bg-blue-600 text-white shadow"
                                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                                }`}
                        >
                            {section.title}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
