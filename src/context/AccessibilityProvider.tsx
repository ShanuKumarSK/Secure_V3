// 'use client';
// import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// type AccessibilityContextType = {
//   settings: Record<string, boolean>;
//   toggleSetting: (key: string) => void;
//   resetSettings: () => void;
// };

// const defaultSettings = {
//   highContrast: false,
//   invert: false,
//   highlightLinks: false,
//   saturation: false,
//   fontIncrease: false,
//   fontDecrease: false,
//   textSpacing: false,
//   lineHeight: false,
//   hideImages: false,
//   bigCursor: false,
// };

// const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

// export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
//   const [settings, setSettings] = useState(defaultSettings);

//   useEffect(() => {
//     const root = document.documentElement;
//     root.classList.toggle('high-contrast', settings.highContrast);
//     root.classList.toggle('invert', settings.invert);
//     root.classList.toggle('highlight-links', settings.highlightLinks);
//     root.classList.toggle('saturate', settings.saturation);
//     root.classList.toggle('font-increase', settings.fontIncrease);
//     root.classList.toggle('font-decrease', settings.fontDecrease);
//     root.classList.toggle('text-spacing', settings.textSpacing);
//     root.classList.toggle('line-height', settings.lineHeight);
//     root.classList.toggle('hide-images', settings.hideImages);
//     root.classList.toggle('big-cursor', settings.bigCursor);
//   }, [settings]);

//   const toggleSetting = (key: string) => {
//     setSettings((prev) => ({
//       ...prev,
//       [key]: !prev[key as keyof typeof prev],
//     }));
//   };


//   const resetSettings = () => {
//     setSettings(defaultSettings);
//   };

//   return (
//     <AccessibilityContext.Provider value={{ settings, toggleSetting, resetSettings }}>
//       {children}
//     </AccessibilityContext.Provider>
//   );
// };

// export const useAccessibility = () => {
//   const context = useContext(AccessibilityContext);
//   if (!context) throw new Error('useAccessibility must be used within a Provider');
//   return context;
// };



'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type AccessibilityContextType = {
    settings: Record<string, boolean | number>;
    toggleSetting: (key: string) => void;
    resetSettings: () => void;
};

const defaultSettings = {
    highContrast: false,
    invert: false,
    highlightLinks: false,
    saturation: false,
    fontSizeStep: 2, // Default (Normal)
    fontDecrease: false,
    fontNormal: false,
    fontIncrease: false,
    textSpacing: false,
    lineHeight: false,
    hideImages: false,
    bigCursor: false,
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
    const [settings, setSettings] = useState(defaultSettings);

    useEffect(() => {
        const root = document.documentElement;

        // Boolean toggles
        root.classList.toggle('high-contrast', !!settings.highContrast);
        root.classList.toggle('invert', !!settings.invert);
        root.classList.toggle('highlight-links', !!settings.highlightLinks);
        root.classList.toggle('saturate', !!settings.saturation);
        root.classList.toggle('text-spacing', !!settings.textSpacing);
        root.classList.toggle('line-height', !!settings.lineHeight);
        root.classList.toggle('hide-images', !!settings.hideImages);    
        root.classList.toggle('big-cursor', !!settings.bigCursor);

        // Font size class: font-size-0 → font-size-4
        for (let i = 0; i <= 4; i++) {
            root.classList.remove(`font-size-${i}`);
        }
        root.classList.add(`font-size-${settings.fontSizeStep}`);
    }, [settings]);

    const toggleSetting = (key: string) => {
        setSettings((prev) => {
            if (key === 'fontIncrease') {
                return {
                    ...prev,
                    fontSizeStep: Math.min((prev.fontSizeStep as number) + 1, 4),
                };
            }
            if (key === 'fontDecrease') {
                return {
                    ...prev,
                    fontSizeStep: Math.max((prev.fontSizeStep as number) - 1, 0),
                };
            }
            if (key === 'fontNormal') {
                return {
                    ...prev,
                    fontSizeStep: 2, // Reset to default
                };
            }

            return {
                ...prev,
                [key]: !prev[key as keyof typeof prev],
            };
        });
    };

    const resetSettings = () => {
        setSettings(defaultSettings);
    };

    return (
        <AccessibilityContext.Provider value={{ settings, toggleSetting, resetSettings }}>
            {children}
        </AccessibilityContext.Provider>
    );
};

export const useAccessibility = () => {
    const context = useContext(AccessibilityContext);
    if (!context) throw new Error('useAccessibility must be used within a Provider');
    return context;
};

