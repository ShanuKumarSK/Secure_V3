import DynamicTable from '@/components/DynamicTable';
import OrdersTable from '@/components/OrdersTable'
import React from 'react'

const orders = Array.from({ length: 30 }, (_, i) => ({
  id: 1077620 + i,
  shipifyId: 17713,
  date: '22 Jan 2020',
  status: 'Pending',
  customer: 'Ahmed',
  email: 'ahmed.123@mail.com',
  country: 'Australia',
  shipping: 'Australian Post Api',
  source: 'ShopifyAU',
  orderType: 'Customer',
}));

const Templates = () => {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <OrdersTable />
      <DynamicTable />
    </main>
  )
}

export default Templates