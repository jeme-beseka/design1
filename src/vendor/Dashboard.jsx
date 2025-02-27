import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { DollarSign, ShoppingBag, Package, Users, ChevronRight } from 'lucide-react';

const VendorDashboard = () => {
  // Sample data
  const salesData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 5000 },
    { name: 'Apr', sales: 2780 },
    { name: 'May', sales: 1890 },
    { name: 'Jun', sales: 2390 },
  ];

  const orderStatusData = [
    { name: 'Delivered', value: 540 },
    { name: 'In Transit', value: 120 },
    { name: 'Processing', value: 85 },
    { name: 'Canceled', value: 45 },
  ];

  const recentOrdersData = [
    { id: '#ORD-1234', customer: 'John Doe', date: '2025-02-25', amount: 128.50, status: 'Delivered' },
    { id: '#ORD-1235', customer: 'Alice Smith', date: '2025-02-24', amount: 75.20, status: 'In Transit' },
    { id: '#ORD-1236', customer: 'Bob Johnson', date: '2025-02-24', amount: 294.99, status: 'Processing' },
    { id: '#ORD-1237', customer: 'Emma Wilson', date: '2025-02-23', amount: 59.99, status: 'Delivered' },
    { id: '#ORD-1238', customer: 'Michael Brown', date: '2025-02-22', amount: 149.95, status: 'Delivered' },
  ];

  const StatCard = ({ title, value, change, icon }) => {
    const isPositive = change.startsWith('+');
    
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
          </div>
          <div className="rounded-full bg-gray-100 p-2">
            {icon}
          </div>
        </div>
        <div className={`mt-4 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change} from last period
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Vendor Dashboard</h1>
        <div className="flex space-x-2">
          <select className="px-3 py-1 border border-gray-300 rounded-md text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>This year</option>
          </select>
          <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">Export</button>
        </div>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Revenue Overview</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#3b82f6" name="Sales ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
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
      
      {/* Recent Orders */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recent Orders</h2>
          <Link to="/orders" className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
            View All <ChevronRight size={16} />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrdersData.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.amount.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                      order.status === 'In Transit' ? 'bg-blue-100 text-blue-800' : 
                      order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
