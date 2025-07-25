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
import FadeIn from '../TransitionComponents/FadeIn';
import { MdDelete, MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";

type Column<T> = {
  key: keyof T | string;
  label: string;
  align?: 'left' | 'center' | 'right';
  render?: (row: T) => React.ReactNode;
  type?: 'text' | 'action';
  actions?: (ActionButton<T> | keyof typeof actionMap)[];
};

type AppTableProps<T> = {
  data: T[];
  columns: Column<T>[];
  page: number;
  rowsPerPage: number;
  totalCount: number;
  onPageChange: (newPage: number) => void;
  onRowsPerPageChange: (newRowsPerPage: number) => void;
  actionHandlers?: Record<string, (row: T) => void>; // New
};

const actionMap = {
  edit: {
    icon: <MdEdit />,
    color: 'bg-yellow-600 text-white',
    tooltip: 'Edit this row',
  },
  delete: {
    icon: <MdDelete />,
    color: 'bg-red-500 text-white',
    tooltip: 'Delete this row',
  },
  view: {
    icon: <FaEye />,
    color: 'bg-cyan-600 text-white',
    tooltip: 'View details',
  },
};


type ActionButton<T> = {
  label: string;
  onClick: (row: T) => void;
  icon?: React.ReactNode;
  color?: string;
  tooltip?: string;
};

function AppTable<T extends Record<string, any>>({
  data,
  columns,
  page,
  rowsPerPage,
  totalCount,
  onPageChange,
  onRowsPerPageChange,
  actionHandlers,
}: AppTableProps<T>) {
  return (
    <Paper className="rounded shadow-lg overflow-hidden">
      <TableContainer>
        <Table>
          <TableHead className="bg-gradient-to-b from-cyan-700 to-cyan-600">
            <TableRow>
              {columns.map((col, index) => (
                <TableCell
                  key={index}
                  align={col.align || 'left'}
                >
                  <FadeIn stagger={0.2} direction="left" duration={0.6} className="font-semibold text-white text-base">{col.label}</FadeIn>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className="shadow-xl">
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <TableRow key={rowIndex} className="hover:bg-cyan-50 even:bg-white odd:bg-gray-100">
                  {columns.map((col, colIndex) => (
                    <TableCell key={colIndex} align={col.align || 'left'}>
                      {col.type === 'action' && Array.isArray(col.actions) ? (
                        <div className="flex justify-center gap-2">
                          {col.actions.map((actionDef, index) => {
                            const actionKey = typeof actionDef === 'string'
                              ? actionDef
                              : actionDef.label.toLowerCase();
                            const baseAction = actionMap[actionKey as keyof typeof actionMap];
                            const handleClick = actionHandlers?.[actionKey];
                            // if (!baseAction || !handleClick) return null;

                            // 🔥 Map 'edit' => 'isEdit', 'delete' => 'isDelete', etc.
                            const permissionKey = `is${actionKey.charAt(0).toUpperCase()}${actionKey.slice(1)}`;
                            const isAllowed = row?.[permissionKey] !== false;

                            if (!baseAction || !handleClick) return null;

                            return (
                              <button
                                key={index}
                                onClick={() => handleClick(row)}
                                // className={`p-2 rounded cursor-pointer ${baseAction.color || 'bg-blue-600 text-white cursor-pointer'}`}
                                className={`p-1.5 text-lg rounded flex items-center justify-center gap-1 ${baseAction.color} ${!isAllowed ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                title={baseAction.tooltip}
                                disabled={!isAllowed}
                              >
                                {baseAction.icon}
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <FadeIn><p className='text-base'>{col.render ? col.render(row) : row[col.key as keyof T]}</p></FadeIn>
                      )}
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
      <div className='bg-gradient-to-b from-cyan-600 to-cyan-700'>
        <TablePagination
          component="div"
          count={totalCount}
          page={page}
          onPageChange={(_, newPage) => onPageChange(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(e) => onRowsPerPageChange(parseInt(e.target.value))}
          rowsPerPageOptions={[5, 10, 25, 50]}
          sx={{
            color: '#ffffff',
            '& .MuiTablePagination-selectLabel': {
              color: '#ffffff',
            },
            '& .MuiTablePagination-displayedRows': {
              color: '#ffffff',
            },
            '& .MuiSvgIcon-root': {
              color: '#ffffff',
            },
          }}
        />
      </div>
    </Paper>
  );
}

export default AppTable;
export type { AppTableProps, Column, actionMap, ActionButton };
