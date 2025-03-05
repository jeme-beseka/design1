import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import Sidebar from './vCommon/Sidebar';
import Header from './vCommon/Header';

function NotificationPage() {
  const [activeTab, setActiveTab] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const notifications = [
    { 
      id: 'n1', 
      message: 'Order #1234 has been placed', 
      time: '2 mins ago',
      type: 'order'
    },
    { 
      id: 'n2', 
      message: 'Payment received for Order #1235', 
      time: '10 mins ago',
      type: 'payment'
    },
    {
      id: 'n3', 
      message: 'Item "Wireless Earbuds" is out of stock',
      time: '30 mins ago',
      type: 'stock'
    },
    {
        id: 'n4', 
        message: 'Order #1236 has been processed', 
        time: '2 hours ago',
        type: 'order'
    }
  ];
  
  return (
    <div className="bg-gray-100 min-h-screen flex p-6 rounded-lg shadow">
      <Sidebar 
        activeTab="" 
        setActiveTab={setActiveTab} 
        isMobileMenuOpen={isMobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
      />
      
      <div className="flex-1 lg:ml-64">
        <Header toggleMobileMenu={toggleMobileMenu} />
        
        <div className="p-4 bg-gray-50 flex-1 overflow-y-auto">
          <div className="flex items-center mb-4">
            <Bell className="mr-2 text-gray-600" />
            <h2 className="text-xl font-bold">Notifications</h2>
          </div>
          
          {notifications.map((notification) => (
            <div 
              key={notification.id} 
              className="bg-white shadow-sm rounded-lg p-4 mb-3 flex items-center"
            >
              <div className="flex-1">
                <p className="text-gray-800">{notification.message}</p>
                <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotificationPage;


// import { React, useState } from 'react';
// import Sidebar from './Sidebar';
// import Header from './Header';

// const NotificationsPage = () => {
//   // Fetch all notifications here or pass them as props
//   const notifications = [
//     { message: 'Order #1234 has been placed', time: '2 mins ago' },
//     { message: 'Payment received for Order #1235', time: '10 mins ago' },
//     { message: 'Item "Wireless Earbuds" is out of stock', time: '1 hour ago' },
//     { message: 'Order #1236 has been processed', time: '2 hours ago' },
//     { message: 'Delivery confirmed for Order #1237', time: '3 hours ago' },
//     // Add more notifications as needed
//   ];

//   const [activeTab, setActiveTab] = useState('dashboard');
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
//     const toggleMobileMenu = () => {
//       setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//   return (
//     <div className="bg-gray-100 min-h-screen flex p-6 rounded-lg shadow">
//     <Sidebar
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//         isMobileMenuOpen={isMobileMenuOpen}
//         toggleMobileMenu={toggleMobileMenu}
//     />

//         <div className="flex-1 lg:ml-64">
//         <Header
//             toggleMobileMenu={toggleMobileMenu}
//         />
//             <main classname="p-4 md:p-6">
//             <h1 className="text-2xl font-bold mb-6">All Notifications</h1>
//             <div className="space-y-4">
//                 {notifications.map((notification, index) => (
//                 <div key={index} className="p-4 border-b border-gray-200 hover:bg-gray-50">
//                     <div className="text-sm text-gray-700">{notification.message}</div>
//                     <div className="text-xs text-gray-500 mt-1">{notification.time}</div>
//                 </div>
//                 ))}
//             </div>
//             </main>
//         </div>
//     </div>
//   );
// };

// export default NotificationsPage;