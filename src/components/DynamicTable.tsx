'use client';

import { useState } from 'react';
import { FaEye, FaEdit, FaTrash, FaDownload, FaSearch } from 'react-icons/fa';
import {
    ArrowDropDown as ArrowDropDownIcon,
    ArrowDropUp as ArrowDropUpIcon,
} from '@mui/icons-material';

type Course = {
    id: number;
    name: string;
    category: string;
    mode: string;
    hours: number;
    eligibility: string;
};

const initialCourses: Course[] = [
    { id: 1, name: 'computer networking', category: 'Compliance training', mode: 'Hybrid', hours: 500, eligibility: 'Pre Metric (10th & Below)' },
    { id: 2, name: 'asd', category: 'Electronic and Instrumentation', mode: 'Offline', hours: 12, eligibility: 'Pre Metric (10th & Below)' },
];

const DynamicTable = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [courses, setCourses] = useState(initialCourses);
    const [searchFilters, setSearchFilters] = useState({
        name: '',
        category: '',
        mode: '',
        eligibility: ''
    });

    const handleFilter = () => {
        const filtered = initialCourses.filter(course =>
            course.name.toLowerCase().includes(searchFilters.name.toLowerCase()) &&
            course.category.toLowerCase().includes(searchFilters.category.toLowerCase()) &&
            course.mode.toLowerCase().includes(searchFilters.mode.toLowerCase()) &&
            course.eligibility.toLowerCase().includes(searchFilters.eligibility.toLowerCase())
        );
        setCourses(filtered);
    };

    const resetFilters = () => {
        setSearchFilters({ name: '', category: '', mode: '', eligibility: '' });
        setCourses(initialCourses);
    };

    return (
        <div className="p-4 rounded">
            {/* Search Toggle */}
            <div className="w-full flex justify-between items-center bg-gray-50 rounded-lg shadow-sm">
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="bg-green-900 text-white px-6 py-2 rounded-br-full flex items-center justify-center gap-3"
                >
                    <FaSearch />Filter
                </button>
                <p className="text-center w-full text-gray-500">Click to search</p>
            </div>

            {/* Filters Section */}
            {showFilters && (
                <div className="bg-gray-100 rounded p-4 shadow">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input
                            placeholder="Course Name"
                            className="border p-2 w-full rounded"
                            value={searchFilters.name}
                            onChange={(e) => setSearchFilters({ ...searchFilters, name: e.target.value })}
                        />
                        <input
                            placeholder="Course Category"
                            className="border p-2 w-full rounded"
                            value={searchFilters.category}
                            onChange={(e) => setSearchFilters({ ...searchFilters, category: e.target.value })}
                        />
                        <input
                            placeholder="Course Mode"
                            className="border p-2 w-full rounded"
                            value={searchFilters.mode}
                            onChange={(e) => setSearchFilters({ ...searchFilters, mode: e.target.value })}
                        />
                        <select
                            className="border p-2 w-full rounded"
                            value={searchFilters.eligibility}
                            onChange={(e) => setSearchFilters({ ...searchFilters, eligibility: e.target.value })}
                        >
                            <option value="">Eligibility</option>
                            <option value="Pre Metric (10th & Below)">Pre Metric (10th & Below)</option>
                        </select>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <button
                            className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center"
                            onClick={handleFilter}
                        >
                            🔍
                        </button>
                        <button
                            className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center"
                            onClick={resetFilters}
                        >
                            🔄
                        </button>
                    </div>
                </div>
            )}

            {/* Table Section */}
            <div className="bg-white shadow rounded overflow-x-auto">
                <div className="flex justify-between items-center">
                    <div className='bg-green-900 text-white px-4 py-2 rounded-tr-full'>
                        <h2 className="text-lg font-bold">Coaching Creation</h2>

                    </div>
                    <div className="flex items-center gap-4 mr-2 ">
                        <button className="flex items-center gap-1 text-green-900 cursor-pointer">
                            <FaDownload />
                            Download Excel
                        </button>
                    </div>
                </div>
                <table className="w-full">
                    <thead className="bg-green-100 text-sm text-gray-700">
                        <tr>
                            <th className="p-3 text-left">Course Name</th>
                            <th className="p-3 text-left">Course Category</th>
                            <th className="p-3 text-left">Course Mode</th>
                            <th className="p-3 text-left">Training Hours</th>
                            <th className="p-3 text-left">Eligibility</th>
                            <th className="p-3 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course) => (
                            <tr key={course.id} className="border-t hover:bg-gray-50">
                                <td className="p-3">{course.name}</td>
                                <td className="p-3">{course.category}</td>
                                <td className="p-3">{course.mode}</td>
                                <td className="p-3">{course.hours}</td>
                                <td className="p-3">{course.eligibility}</td>
                                <td className="p-3 flex gap-3 items-center text-lg">
                                    <FaEye className="text-gray-700 cursor-pointer" />
                                    <FaEdit className="text-green-700 cursor-pointer" />
                                    <FaTrash className="text-red-600 cursor-pointer" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Pagination */}
                <div className="flex justify-end items-center gap-2 p-3">
                    <label htmlFor="pagination" className="text-sm text-gray-600">Items per page:</label>
                    <select id="pagination" className="border rounded px-2 py-1 text-sm">
                        <option>10</option>
                        <option>25</option>
                    </select>
                    <button className="px-2">◀</button>
                    <span className="border rounded px-3 py-1 text-sm bg-gray-100">1</span>
                    <button className="px-2">▶</button>
                </div>
            </div>
        </div>
    );
};

export default DynamicTable;
