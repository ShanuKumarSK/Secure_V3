// "use client"

// import AppFilter from '@/components/DynamicComponents/AppFilter';
// import AppTable, { Column } from '@/components/DynamicComponents/AppTable';
// import React, { useState } from 'react'
// import { TextField, MenuItem } from '@mui/material';
// import AppSelect from '@/components/DynamicComponents/AppSelect';

// const Templates = () => {


//   const [searchFilters, setSearchFilters] = useState({ state: '', period: '' });

//   const states = ['Bihar', 'Odisha'];
//   const periods = ['Q1', 'Q2'];

//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   const handleFilter = () => {
//     console.log('Apply filters');
//   };

//   const resetFilters = () => {
//     setSearchFilters({ state: '', period: '' });
//   };

//   const [data, setData] = useState([
//     { id: 1, state: 'Bihar', period: 'Q1', totalOrders: 50 },
//     { id: 2, state: 'Odisha', period: 'Q2', totalOrders: 30 },
//   ]);

//   const columns: Column<typeof data[0]>[] = [
//     { key: 'state', label: 'State' },
//     { key: 'period', label: 'Period' },
//     { key: 'totalOrders', label: 'Total Orders', align: 'right' },
//   ];


//   return (
//     <main className="min-h-screen bg-gray-100 p-4">
//       <AppFilter onFilter={handleFilter} onReset={resetFilters}>
//         <AppSelect
//           label="State"
//           value={searchFilters.state}
//           options={states}
//           onChange={(val) => setSearchFilters({ ...searchFilters, state: val })}
//         />
//         <AppSelect
//           label="Period"
//           value={searchFilters.period}
//           options={periods}
//           onChange={(val) => setSearchFilters({ ...searchFilters, period: val })}
//         />
//       </AppFilter>
//       <AppTable
//         data={data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)}
//         columns={columns}
//         page={page}
//         rowsPerPage={rowsPerPage}
//         totalCount={data.length}
//         onPageChange={setPage}
//         onRowsPerPageChange={(newRows) => {
//           setRowsPerPage(newRows);
//           setPage(0);
//         }}
//       />
//     </main>
//   )
// }

// export default Templates


'use client';

import AppFilter from '@/components/DynamicComponents/AppFilter';
import AppTable, { Column } from '@/components/DynamicComponents/AppTable';
import AppSelect from '@/components/DynamicComponents/AppSelect';

import React, { useState, useMemo } from 'react';

const Templates = () => {
  const [searchFilters, setSearchFilters] = useState({ state: '', period: '' });
  const [appliedFilters, setAppliedFilters] = useState({ state: '', period: '' });

  const states = ['Bihar', 'Odisha'];
  const periods = ['Q1', 'Q2'];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const allData = [
    { id: 1, state: 'Bihar', period: 'Q1', totalOrders: 50 },
    { id: 2, state: 'Odisha', period: 'Q2', totalOrders: 30 },
    { id: 3, state: 'Bihar', period: 'Q2', totalOrders: 60 },
    { id: 4, state: 'Odisha', period: 'Q1', totalOrders: 20 },
    { id: 1, state: 'Bihar', period: 'Q1', totalOrders: 50 },
    { id: 2, state: 'Odisha', period: 'Q2', totalOrders: 30 },
    { id: 3, state: 'Bihar', period: 'Q2', totalOrders: 60 },
    { id: 4, state: 'Odisha', period: 'Q1', totalOrders: 20 },
  ];

  const handleFilter = () => {
    setAppliedFilters({ ...searchFilters });
    setPage(0);
  };

  const resetFilters = () => {
    const empty = { state: '', period: '' };
    setSearchFilters(empty);
    setAppliedFilters(empty);
    setPage(0);
  };

  const filteredData = useMemo(() => {
    return allData.filter((item) => {
      const matchState = appliedFilters.state ? item.state === appliedFilters.state : true;
      const matchPeriod = appliedFilters.period ? item.period === appliedFilters.period : true;
      return matchState && matchPeriod;
    });
  }, [allData, appliedFilters]);

  const paginatedData = useMemo(() => {
    const start = page * rowsPerPage;
    return filteredData.slice(start, start + rowsPerPage);
  }, [filteredData, page, rowsPerPage]);

  const columns: Column<typeof allData[0]>[] = [
    { key: 'state', label: 'State' },
    { key: 'period', label: 'Period' },
    { key: 'totalOrders', label: 'Total Orders', align: 'right' },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <AppFilter onFilter={handleFilter} onReset={resetFilters}>
        <AppSelect
          label="State"
          value={searchFilters.state}
          options={states}
          onChange={(val) => setSearchFilters({ ...searchFilters, state: val })}
        />
        <AppSelect
          label="Period"
          value={searchFilters.period}
          options={periods}
          onChange={(val) => setSearchFilters({ ...searchFilters, period: val })}
        />
      </AppFilter>

      <AppTable
        data={paginatedData}
        columns={columns}
        page={page}
        rowsPerPage={rowsPerPage}
        totalCount={filteredData.length}
        onPageChange={setPage}
        onRowsPerPageChange={(newRows) => {
          setRowsPerPage(newRows);
          setPage(0);
        }}
      />
    </main>
  );
};

export default Templates;
