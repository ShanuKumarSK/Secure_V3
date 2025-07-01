'use client';
import { useState } from 'react';
import { Checkbox, IconButton, TextField, Tabs, Tab, Button } from '@mui/material';
import { Visibility, Edit, Delete } from '@mui/icons-material';

const tabs = ['All', 'Unpaid', 'Paid', 'Archived'];

const invoices = [
  { id: 1001, company: 'Tech Jungle', dueDate: '05 Oct 2022', status: 'Unpaid', amount: 973.48 },
  { id: 1002, company: 'Signal Cloud', dueDate: '24 Sep 2022', status: 'Paid', amount: 480.21 },
  { id: 1003, company: 'Hog Bridge', dueDate: '17 Sep 2022', status: 'Unpaid', amount: 1254.37 },
  { id: 1004, company: 'Cone Care', dueDate: '11 Sep 2022', status: 'Paid', amount: 973.48 },
  { id: 1005, company: 'Driftcast', dueDate: '02 Sep 2022', status: 'Unpaid', amount: 7094.45 },
  { id: 1006, company: 'Ocean Hut', dueDate: '30 Aug 2022', status: 'Paid', amount: 4599.75 },
  { id: 1007, company: 'Smartbit', dueDate: '16 Aug 2022', status: 'Paid', amount: 804.56 }
];

type Invoice = {
  id: number;
  company: string;
  dueDate: string;
  status: 'Paid' | 'Unpaid';
  amount: number;
};

export default function OrdersTable() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [search, setSearch] = useState('');
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const filteredData = invoices.filter((inv) => {
    const matchesTab =
      selectedTab === 0 ||
      inv.status === tabs[selectedTab];
    const matchesSearch = inv.company.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const toggleSelectRow = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((row) => row !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full">
      <Tabs value={selectedTab} onChange={(_, val) => setSelectedTab(val)}>
        {tabs.map((tab, idx) => (
          <Tab key={idx} label={`${tab}`} />
        ))}
      </Tabs>

      <div className="flex justify-between items-center my-4">
        <div className="space-x-2">
          <Button variant="outlined" size="small">Mark as paid</Button>
          <Button variant="outlined" size="small">Mark as unpaid</Button>
          <Button variant="outlined" size="small">Print</Button>
          <Button variant="outlined" size="small" color="error">Delete</Button>
        </div>
        <TextField
          size="small"
          placeholder="Search invoice"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th><Checkbox /></th>
            <th>Invoice</th>
            <th>Company</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((inv) => (
            <tr key={inv.id} className="hover:bg-gray-50 border-b">
              <td><Checkbox checked={selectedRows.includes(inv.id)} onChange={() => toggleSelectRow(inv.id)} /></td>
              <td>{inv.id}</td>
              <td className="font-semibold">{inv.company}</td>
              <td>{inv.dueDate}</td>
              <td>
                <span className={`px-2 py-1 text-xs rounded-full ${inv.status === 'Paid' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {inv.status}
                </span>
              </td>
              <td>${inv.amount.toFixed(2)}</td>
              <td>
                <div className="flex space-x-1">
                  <IconButton size="small"><Visibility fontSize="small" /></IconButton>
                  <IconButton size="small"><Edit fontSize="small" /></IconButton>
                  <IconButton size="small"><Delete fontSize="small" /></IconButton>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
