import { IoAccessibility } from "react-icons/io5";
import { useState } from 'react';
import { useAccessibility } from '@/context/AccessibilityProvider';
import {
    FaEye,
    FaMousePointer,
    FaFontAwesome,
} from 'react-icons/fa';
import {
    MdContrast,
    MdOutlineInvertColors,
    MdOutlineLink,
    MdImage,
    MdTextIncrease,
    MdTextDecrease,
    MdFormatLineSpacing
} from 'react-icons/md';
import { BsType } from 'react-icons/bs';
import FadeIn from "./TransitionComponents/FadeIn";

const tools = [
    { key: 'highContrast', label: 'High Contrast', icon: <MdContrast size={24} className="text-yellow-500" /> },
    { key: 'invert', label: 'Invert', icon: <MdOutlineInvertColors size={24} className="text-cyan-500" /> },
    { key: 'highlightLinks', label: 'Highlight Links', icon: <MdOutlineLink size={24} className="text-blue-500" /> },
    { key: 'saturation', label: 'Saturation', icon: <FaEye size={24} className="text-orange-500" /> },
    { key: 'fontIncrease', label: 'Font Size +', icon: <MdTextIncrease size={24} className="text-green-500" /> },
    { key: 'fontDecrease', label: 'Font Size -', icon: <MdTextDecrease size={24} className="text-red-500" /> },
    { key: 'fontNormal', label: 'Normal Font', icon: <FaFontAwesome size={24} className="text-rose-500" /> },
    { key: 'textSpacing', label: 'Text Spacing', icon: <BsType size={24} className="text-fuchsia-500" /> },
    { key: 'lineHeight', label: 'Line Height', icon: <MdFormatLineSpacing size={24} className="text-indigo-500" /> },
    { key: 'hideImages', label: 'Hide Images', icon: <MdImage size={24} className="text-green-500" /> },
    { key: 'bigCursor', label: 'Big Cursor', icon: <FaMousePointer className="text-teal-500" size={24} /> },
];

const AccessibilityToggle = () => {
    const [open, setOpen] = useState(false);
    const { toggleSetting, settings } = useAccessibility();
    const directions = ['top', 'bottom', 'left', 'right'] as const;

    return (
        <div
            className="relative z-50 inline-block"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            {/* Icon Button */}
            <button
                className="p-2 text-white cursor-pointer hover:bg-cyan-600 transition rounded-md"
                aria-label="Accessibility Tools"
            >
                <IoAccessibility size={20} />
            </button>

            {/* Popup Panel */}
            <div className="absolute right-0 mt-0">
                {open && (
                    <div className="w-[360px] bg-teal-50 shadow-xl rounded-lg p-4 space-y-4 z-50 accessibility-ignore">
                        <h2 className="text-base font-semibold text-center text-black">Accessibility Tools</h2>

                        <div className="grid grid-cols-3 gap-2 ">
                            {tools.map(({ key, label, icon }, index) => {
                                const direction = directions[index % directions.length];
                                return (
                                    <div key={key} className="w-full">
                                        <FadeIn stagger={0.2} direction={direction} duration={0.7}>
                                            <button
                                                key={key}
                                                onClick={() => toggleSetting(key)}
                                                className={`w-full flex flex-col items-center justify-center px-2 py-3 rounded-lg shadow-lg transition text-xs text-center h-20 cursor-pointer ${settings[key]
                                                    ? 'bg-cyan-700 text-white border-cyan-700'
                                                    : 'bg-white text-gray-800 border-gray-300 hover:bg-slate-50 hover:scale-110 hover:shadow-xl'
                                                    }`}
                                            >
                                                {icon}
                                                <span className="mt-1 font-semibold">{label}</span>
                                            </button>
                                        </FadeIn>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AccessibilityToggle;
