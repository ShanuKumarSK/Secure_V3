'use client';

import { Button } from '@mui/material';
import { FaFileExcel } from 'react-icons/fa';
import { saveAs as saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { toast } from 'react-toastify';
import React from 'react';

type Props = {
  endpoint: string;
  filename?: string;
  transformData?: (data: any[]) => any[];
  disabled?: boolean; // ✅ New prop
};

const DownloadExcelButton: React.FC<Props> = ({
  endpoint,
  filename = 'data.xlsx',
  transformData,
  disabled = false, // ✅ default value
}) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error('Failed to fetch data');

      const json = await response.json();
      const data = Array.isArray(json) ? json : json.data || [];

      const processedData = transformData ? transformData(data) : data;

      const worksheet = XLSX.utils.json_to_sheet(processedData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

      const blob = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });
      const buffer = new ArrayBuffer(blob.length);
      const view = new Uint8Array(buffer);
      for (let i = 0; i < blob.length; i++) view[i] = blob.charCodeAt(i) & 0xff;

      const excelBlob = new Blob([buffer], { type: 'application/octet-stream' });
      saveAs(excelBlob, filename);

      toast.success('Excel downloaded!');
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || 'Failed to download Excel');
    }
  };

  return (
    <Button
      onClick={handleDownload}
      variant="outlined"
      startIcon={<FaFileExcel />}
      disabled={disabled}
      className={`!text-green-600 border-green-600 hover:!bg-green-50 ${disabled ? '!opacity-50 !cursor-not-allowed' : ''
        }`}
    >
      Download Excel
    </Button>
  );
};

export default DownloadExcelButton;
