'use client';

import AppFilter from '@/components/DynamicComponents/AppFilter';
import AppTable, { Column } from '@/components/DynamicComponents/AppTable';
import AppSelect from '@/components/DynamicComponents/AppSelect';
import React, { useState, useMemo, useCallback } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { confirmDialog } from '@/utils/confirmDialog';
import DownloadExcelButton from '@/utils/DownloadExcelButton';

const Templates = () => {
  const [searchFilters, setSearchFilters] = useState({ state: '', period: '' });
  const [appliedFilters, setAppliedFilters] = useState({ state: '', period: '' });
  const states = ['Bihar', 'Odisha'];
  const periods = ['Q1', 'Q2'];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setData] = useState([
    { id: 1, state: 'Bihar', period: 'Q1', totalOrders: 50,isEdit: false,
    isDelete: true,
    isView: true, },
    { id: 2, state: 'Odisha', period: 'Q2', totalOrders: 30 },
    { id: 3, state: 'Bihar', period: 'Q2', totalOrders: 60 },
    { id: 4, state: 'Odisha', period: 'Q1', totalOrders: 20 },
    { id: 5, state: 'Bihar', period: 'Q1', totalOrders: 50 },
    { id: 6, state: 'Odisha', period: 'Q2', totalOrders: 30 },
    { id: 7, state: 'Bihar', period: 'Q2', totalOrders: 60 },
    { id: 8, state: 'Odisha', period: 'Q1', totalOrders: 20 },
  ]);

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

  const handleDelete = useCallback(async (row: any) => {
    const confirmed = await confirmDialog({
      title: 'Are you sure?',
      text: `You are about to delete data for ${row.state} (${row.period})`,
      confirmText: 'Yes, delete it!',
    });
    if (confirmed) {
      setData((prev) => prev.filter((item) => item.id !== row.id));
      toast.success('Row deleted successfully!');
    } else {
      toast.info('Deletion cancelled.');
    }
  }, []);

  const handleEdit = useCallback((row: any) => {
    console.log('Edit clicked', row);
  }, []);

  const handleView = useCallback((row: any) => {
    console.log('View clicked', row);
  }, []);

  const actionHandlers = {
    edit: handleEdit,
    delete: handleDelete,
    view: handleView
  };

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchState = appliedFilters.state ? item.state === appliedFilters.state : true;
      const matchPeriod = appliedFilters.period ? item.period === appliedFilters.period : true;
      return matchState && matchPeriod;
    });
  }, [data, appliedFilters]);

  const paginatedData = useMemo(() => {
    const start = page * rowsPerPage;
    return filteredData.slice(start, start + rowsPerPage);
  }, [filteredData, page, rowsPerPage]);

  const columns: Column<typeof data[0]>[] = [
    { key: 'id', label: 'S. No.', align: 'center', },
    { key: 'state', label: 'State', align: 'center' },
    { key: 'period', label: 'Period', align: 'center' },
    { key: 'totalOrders', label: 'Total Orders', align: 'center' },
    {
      key: 'actions',
      label: 'Actions',
      type: 'action',
      align: 'center',
      actions: ['edit', 'delete', 'view']
    },
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

      {/* <DownloadExcelButton
        endpoint="/api/orders"
        filename="orders.xlsx"
        disabled={filteredData.length === 0} // 👈 disable if no data
        transformData={(data) =>
          data.map((d) => ({
            State: d.state,
            Period: d.period,
            Orders: d.totalOrders,
          }))
        }
      /> */}

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
        actionHandlers={actionHandlers}
      />
    </main>
  );
};

export default Templates;
