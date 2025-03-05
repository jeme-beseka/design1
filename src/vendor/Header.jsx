import React, { useState, useEffect, useRef } from 'react';
import { Bell, Menu, Search, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { allShops } from '../data/shopData';
import NotificationPanel from './vComponents/NotificationPanel';

//Custom hook for handling notification panel
function useClickOutside(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
const Header = ({ toggleMobileMenu }) => {
  const navigate = useNavigate();
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(false);
  const shopData = allShops[0];

  // Sample notifications data
  const [notifications, setNotifications] = useState([
    { message: 'Order #1234 has been placed', time: '2 mins ago' },
    { message: 'Payment received for Order #1235', time: '10 mins ago' },
    { message: 'Item "Wireless Earbuds" is out of stock', time: '1 hour ago' },
    { message: 'Order #1236 has been processed', time: '2 hours ago' },
    { message: 'Delivery confirmed for Order #1237', time: '3 hours ago' },
    // Add more notifications as needed
  ]);

  const panelRef = useRef();
  useClickOutside(panelRef, () => {
    setIsNotificationPanelOpen(false);
  });

  // Update Bell button click handler
  const handleBellClick = () => {
    if (!isNotificationPanelOpen) {
      // Mark all notifications as read when opening
      const updatedNotifications = notifications.map(notif => ({ ...notif, isRead: true }));
      setNotifications(updatedNotifications);
    }
    setIsNotificationPanelOpen(!isNotificationPanelOpen);
  };

  // Calculate unread count
  const unreadCount = notifications.filter(notif => !notif.isRead).length;

  // Handle "Show More" button click
  const handleShowMore = () => {
    // Navigate to the notifications page
    navigate('/vendor/notifications');
    console.log('Navigate to notifications page');
  };

  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-4 relative">
      <div className="flex items-center">
        <button 
          onClick={toggleMobileMenu} 
          className="mr-2 text-gray-600 lg:hidden"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold text-gray-800 lg:hidden">{shopData.name}</h1>
      </div>
      
      <div className="hidden md:block flex-1 max-w-xl mx-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button 
          className="relative p-2 text-gray-600"
          onClick={handleBellClick}
        >
          <Bell size={20} />
    {unreadCount > 0 && (
      <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
        {unreadCount}
      </span>
    )}
        </button>
        <button className="p-2 text-gray-600"
          onClick={() => navigate('/vendor/chat')}
        >
          <Mail size={20} />
          <span className="absolute top-0 right-0 h-2 w-2 bg-yellow-400 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
            VS
          </div>
          <span className="hidden md:inline text-sm font-medium">Vendor Store</span>
        </div>
      </div>

      {isNotificationPanelOpen && (
        <NotificationPanel 
          notifications={notifications} 
          onShowMore={handleShowMore} 
        />
      )}
    </header>
  );
};

export default Header;


// import React from 'react';
// import { Bell, Menu, Search, Mail } from 'lucide-react';
// import { allShops } from '../data/shopData';

// const Header = ({ toggleMobileMenu }) => {

//   const shopData = allShops[0];

//   return (
//     <header className="bg-white shadow-sm h-16 flex items-center justify-between px-4">
//       <div className="flex items-center">
//         <button 
//           onClick={toggleMobileMenu} 
//           className="mr-2 text-gray-600 lg:hidden"
//         >
//           <Menu size={24} />
//         </button>
//         <h1 className="text-xl font-bold text-gray-800 lg:hidden">{shopData.name}</h1>
//       </div>
      
//       <div className="hidden md:block flex-1 max-w-xl mx-4">
//         <div className="relative">
//           <input 
//             type="text" 
//             placeholder="Search..." 
//             className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//         </div>
//       </div>
      
//       <div className="flex items-center space-x-4">
//         <button className="relative p-2 text-gray-600">
//           <Bell size={20} />
//           <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
//         </button>
//         <button className="p-2 text-gray-600">
//           <Mail size={20} />
//           <span className="absolute top-0 right-0 h-2 w-2 bg-yellow-400 rounded-full"></span>
//         </button>
//         <div className="flex items-center space-x-2">
//           <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
//             VS
//           </div>
//           <span className="hidden md:inline text-sm font-medium">Vendor Store</span>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;