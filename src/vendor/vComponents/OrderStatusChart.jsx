import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';


const OrderStatusChart = () => {

  const orderStatusData = [
    { name: 'Delivered', value: 540 },
    { name: 'In Transit', value: 120 },
    { name: 'Processing', value: 85 },
    { name: 'Canceled', value: 45 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">Order Status</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie 
                        data={orderStatusData} 
                        cx="50%" 
                        cy="50%" 
                        outerRadius={80} 
                        label
                        dataKey="value"
                        nameKey="name"
                      >
                        {orderStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={['#3b82f6', '#10b981', '#f59e0b', '#ef4444'][index]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
    </div>
  );
};

export default OrderStatusChart;