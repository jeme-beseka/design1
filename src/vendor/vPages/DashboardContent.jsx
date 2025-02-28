import React from 'react';
import StatCard from '../vComponents/StatCard';
import RevenueChart from '../vComponents/RevenueChart';
import OrderStatusChart from '../vComponents/OrderStatusChart';
import RecentOrders from '../vComponents/RecentOrders';
import { DollarSign, ShoppingBag, Package, Users } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
// import { ChevronRight } from 'lucide-react';


const DashboardContent = () => {
  // Sample data for charts
  // const salesData = [
  //   { name: 'Jan', sales: 4000 },
  //   { name: 'Feb', sales: 3000 },
  //   { name: 'Mar', sales: 5000 },
  //   { name: 'Apr', sales: 2780 },
  //   { name: 'May', sales: 1890 },
  //   { name: 'Jun', sales: 2390 },
  // ];

  const recentOrdersData = [
    { id: '#ORD-1234', customer: 'John Doe', date: '2025-02-25', amount: 128.50, status: 'Delivered' },
    { id: '#ORD-1235', customer: 'Alice Smith', date: '2025-02-24', amount: 75.20, status: 'In Transit' },
    { id: '#ORD-1236', customer: 'Bob Johnson', date: '2025-02-24', amount: 294.99, status: 'Processing' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex space-x-2">
          <select className="px-3 py-1 border border-gray-300 rounded-md text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Revenue" 
          value="$12,890.56" 
          change="+12.5%" 
          icon={<DollarSign className="text-green-500" size={24} />} 
        />
        
        <StatCard 
          title="Orders" 
          value="156" 
          change="+8.2%" 
          icon={<ShoppingBag className="text-blue-500" size={24} />} 
        />
        
        <StatCard 
          title="Products" 
          value="84" 
          change="+2.5%" 
          icon={<Package className="text-purple-500" size={24} />} 
        />
        
        <StatCard 
          title="Customers" 
          value="2,315" 
          change="+18.3%" 
          icon={<Users className="text-yellow-500" size={24} />} 
        />
      </div>
      
      {/* Charts Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <OrderStatusChart />
      </div>
      
      {/* Recent Orders */}
      <RecentOrders orders={recentOrdersData} />
    </div>
  );
};

export default DashboardContent;