'use client';

import { ReactNode, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { LuRefreshCw } from "react-icons/lu";
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip } from '@mui/material';

type Props = {
    children?: ReactNode;
    onFilter?: () => void;
    onReset?: () => void;
};

const AppFilter = ({ children, onFilter, onReset }: Props) => {
    const [showFilters, setShowFilters] = useState(false);
    return (
        <div className="py-4 rounded">
            {/* Search Toggle */}
            <div className='mb-4' >
                <div className="w-full flex justify-between items-center bg-gray-50 rounded-lg shadow-lg cursor-pointer" onClick={() => setShowFilters(!showFilters)}>
                    <button className="bg-gradient-to-br from-cyan-700 to-cyan-500 text-white px-8 py-3 rounded-br-full flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap">
                        {
                            showFilters
                                ?
                                <>
                                    <span className='text-lg tracking-wider w-full'>Filter By</span>
                                </>
                                :
                                <>
                                    <FaSearch /><span className='text-lg tracking-wider'>Filter</span>
                                </>
                        }
                    </button>
                    {
                        showFilters ? <></> : <p className="text-center w-full text-gray-500">Click to search</p>
                    }
                </div>

                {/* Filters Section */}
                <AnimatePresence>
                    {showFilters && (
                        <motion.div
                            key="filter-section"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: '1px', opacity: 1 }}
                            transition={{ duration: 0.05 }}
                            className="overflow-hidden bg-gray-50 rounded p-4 shadow-lg"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                {children}
                            </div>
                            <div className="flex gap-4 mt-4">
                                <Tooltip title="Search" arrow>
                                    <button
                                        className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center cursor-pointer"
                                        onClick={onFilter}
                                    >
                                        <FaSearch />
                                    </button>
                                </Tooltip>
                                <Tooltip title="Reset" arrow>
                                    <button
                                        className="w-12 h-12 bg-gradient-to-br from-red-700 to-orange-500 text-white rounded-full flex items-center justify-center cursor-pointer"
                                        onClick={onReset}

                                    >
                                        <LuRefreshCw />
                                    </button>
                                </Tooltip>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AppFilter;
