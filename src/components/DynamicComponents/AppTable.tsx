// import React from 'react'
// import { FaDownload, FaEdit, FaEye, FaTrash } from 'react-icons/fa'

// type Course = {
//     id: number;
//     name: string;
//     category: string;
//     mode: string;
//     hours: number;
//     eligibility: string;
// };

// const initialCourses: Course[] = [
//     { id: 1, name: 'computer networking', category: 'Compliance training', mode: 'Hybrid', hours: 500, eligibility: 'Pre Metric (10th & Below)' },
//     { id: 2, name: 'asd', category: 'Electronic and Instrumentation', mode: 'Offline', hours: 12, eligibility: 'Pre Metric (10th & Below)' },
// ];


// const AppTable = () => {


//     return (
//         <div>{/* Table Section */}
//             <div className="bg-white shadow rounded overflow-x-auto">
//                 <div className="flex justify-between items-center">
//                     <div className='bg-lime-700 text-white px-6 py-3 rounded-tr-full'>
//                         <h2 className="text-lg font-bold">List of Templates</h2>

//                     </div>
//                     <div className="flex items-center gap-4 mr-2 ">
//                         <button className="flex items-center gap-1 text-green-900 cursor-pointer">
//                             <FaDownload />
//                             Download Excel
//                         </button>
//                     </div>
//                 </div>
//                 <table className="w-full">
//                     <thead className="bg-green-100 text-sm text-gray-700">
//                         <tr>
//                             <th className="p-3 text-left">Course Name</th>
//                             <th className="p-3 text-left">Course Category</th>
//                             <th className="p-3 text-left">Course Mode</th>
//                             <th className="p-3 text-left">Training Hours</th>
//                             <th className="p-3 text-left">Eligibility</th>
//                             <th className="p-3 text-left">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {initialCourses.map((course) => (
//                             <tr key={course.id} className="border-t hover:bg-gray-50">
//                                 <td className="p-3">{course.name}</td>
//                                 <td className="p-3">{course.category}</td>
//                                 <td className="p-3">{course.mode}</td>
//                                 <td className="p-3">{course.hours}</td>
//                                 <td className="p-3">{course.eligibility}</td>
//                                 <td className="p-3 flex gap-3 items-center text-lg">
//                                     <FaEye className="text-gray-700 cursor-pointer" />
//                                     <FaEdit className="text-green-700 cursor-pointer" />
//                                     <FaTrash className="text-red-600 cursor-pointer" />
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 <div className="flex justify-end items-center gap-2 p-3">
//                     <label htmlFor="pagination" className="text-sm text-gray-600">Items per page:</label>
//                     <select id="pagination" className="border rounded px-2 py-1 text-sm">
//                         <option>10</option>
//                         <option>25</option>
//                     </select>
//                     <button className="px-2">◀</button>
//                     <span className="border rounded px-3 py-1 text-sm bg-gray-100">1</span>
//                     <button className="px-2">▶</button>
//                 </div>
//             </div></div>
//     )
// }

// export default AppTable




'use client';

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from '@mui/material';

export type Column<T> = {
  key: keyof T | string;
  label: string;
  align?: 'left' | 'center' | 'right';
  render?: (row: T) => React.ReactNode;
};

type AppTableProps<T> = {
  data: T[];
  columns: Column<T>[];
  page: number;
  rowsPerPage: number;
  totalCount: number;
  onPageChange: (newPage: number) => void;
  onRowsPerPageChange: (newRowsPerPage: number) => void;
};

function AppTable<T extends Record<string, any>>({
  data,
  columns,
  page,
  rowsPerPage,
  totalCount,
  onPageChange,
  onRowsPerPageChange,
}: AppTableProps<T>) {
  return (
    <Paper className="rounded shadow overflow-hidden">
      <TableContainer>
        <Table>
          <TableHead className="bg-gray-100">
            <TableRow>
              {columns.map((col, index) => (
                <TableCell
                  key={index}
                  align={col.align || 'left'}
                  className="font-semibold text-gray-700 text-base"
                >
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <TableRow key={rowIndex} className="hover:bg-gray-50">
                  {columns.map((col, colIndex) => (
                    <TableCell key={colIndex} align={col.align || 'left'}>
                      {col.render ? col.render(row) : row[col.key as keyof T]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} align="center" className="py-6 text-gray-500">
                  No data available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={totalCount}
        page={page}
        onPageChange={(_, newPage) => onPageChange(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => onRowsPerPageChange(parseInt(e.target.value))}
        rowsPerPageOptions={[5, 10, 25, 50]}
      />
    </Paper>
  );
}

export default AppTable;
