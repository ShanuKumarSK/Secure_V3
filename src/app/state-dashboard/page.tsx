"use client"

import React, { useState } from 'react';
import IndiaMap from '@/components/IndiaMap';
import StateCard from '@/components/StateCard';
import { statesData } from '@/assets/staticData/stateData';

const StateDashboard = () => {

  const [selectedStateCode, setSelectedStateCode] = useState<string | null>(null);

  const handleSelectState = (code: string) => {
    setSelectedStateCode(code);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-6">
      <IndiaMap onSelectState={handleSelectState} />
      <div className="w-full md:w-1/2 flex items-center justify-center align-center">
        <StateCard stateCode={selectedStateCode ?? ''} state={selectedStateCode ? statesData[selectedStateCode] : null} />
      </div>
    </main>
  )
}

export default StateDashboard;