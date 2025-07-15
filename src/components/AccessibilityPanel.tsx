import { IoAccessibility } from "react-icons/io5";
import { useState } from 'react';
import { useAccessibility } from '@/context/AccessibilityProvider';

const AccessibilityToggle = () => {
    const [open, setOpen] = useState(false);
    const { toggleSetting, settings } = useAccessibility();

    const tools = [
        { key: 'highContrast', label: 'High Contrast' },
        { key: 'invert', label: 'Invert Colors' },
        { key: 'highlightLinks', label: 'Highlight Links' },
        { key: 'saturation', label: 'Saturation' },
        { key: 'fontDecrease', label: 'A-' },
        { key: 'fontNormal', label: 'A' },
        { key: 'fontIncrease', label: 'A+' },
        { key: 'textSpacing', label: 'Text Spacing' },
        { key: 'lineHeight', label: 'Line Height' },
        { key: 'hideImages', label: 'Hide Images' },
        { key: 'bigCursor', label: 'Big Cursor' },
    ];

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
                    <div className="w-72 bg-white shadow-xl rounded-lg p-4 space-y-4 z-50">
                        <h2 className="text-lg font-semibold text-center text-black">Accessibility Tools</h2>
                        <div className="grid grid-cols-2 gap-2">
                            {tools.map(({ key, label }) => (
                                <button
                                    key={key}
                                    onClick={() => toggleSetting(key)}
                                    className={`border px-3 py-2 rounded text-sm transition cursor-pointer ${settings[key] ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300'
                                        }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AccessibilityToggle;
