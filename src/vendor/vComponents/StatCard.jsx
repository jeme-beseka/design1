import React from 'react';

const StatCard = ({ title, value, change, icon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className="rounded-full bg-gray-100 p-2">
          {icon}
        </div>
      </div>
      <div className="mt-4 text-sm text-green-600">
        {change} from last period
      </div>
    </div>
  );
};

export default StatCard;
