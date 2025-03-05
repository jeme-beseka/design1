import React from 'react';

const NotificationPanel = React.forwardRef(({ notifications, onShowMore }, ref) => {
  return (
    <div className="absolute right-2 mt-8 w-80 bg-white rounded-lg shadow-lg z-50">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Notifications</h3>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification, index) => (
          <div key={index} className="p-4 border-b border-gray-200 hover:bg-gray-50">
            <div className="text-sm text-gray-700">{notification.message}</div>
            <div className="text-xs text-gray-500 mt-1">{notification.time}</div>
          </div>
        ))}
      </div>
      <div className="p-4 text-center">
        <button 
          onClick={onShowMore} 
          className="text-blue-600 hover:text-blue-800 text-sm"
        >
          Show More
        </button>
      </div>
    </div>
  );
});


export default NotificationPanel;