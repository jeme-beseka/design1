import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ChevronRight } from 'lucide-react';
import Sidebar from './Sidebar';
import Header from './Header';

const mockChatUsers = [
  { 
    id: '1', 
    name: 'Emily Johnson', 
    location: 'New York, NY', 
    avatarInitials: 'EJ' 
  },
  { 
    id: '2', 
    name: 'Michael Chen', 
    location: 'San Francisco, CA', 
    avatarInitials: 'MC' 
  }
];

const mockConversations = [
  {
    userId: '1',
    messages: [
      { 
        id: 'm1', 
        sender: 'customer', 
        text: 'Hi, I have a question about my recent order...', 
        timestamp: '2024-03-05T10:30:00Z', 
        type: 'text' 
      }
    ],
    unreadCount: 2,
    lastMessageTime: '10:30 AM'
  },
  {
    userId: '2',
    messages: [
      { 
        id: 'm2', 
        sender: 'customer', 
        text: 'Can you help me with product sizing?', 
        timestamp: '2024-03-05T11:45:00Z', 
        type: 'text' 
      }
    ],
    unreadCount: 1,
    lastMessageTime: '11:45 AM'
  }
];

function ChatListPage() {
  const [activeTab, setActiveTab] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleChatSelect = (userId) => {
    navigate(`/vendor/chat/${userId}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex p-6 rounded-lg shadow">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isMobileMenuOpen={isMobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
      />
      
      <div className="flex-1 lg:ml-64">
        <Header toggleMobileMenu={toggleMobileMenu} />
        
        <div className="p-4 bg-gray-50 flex-1 overflow-y-auto">
          <div className="flex items-center mb-4">
            <Mail className="mr-2 text-gray-600" />
            <h2 className="text-xl font-bold">Customer Chats</h2>
          </div>
          
          {mockConversations.map((conversation) => {
            const user = mockChatUsers.find(u => u.id === conversation.userId);
            return user ? (
              <div 
                key={user.id} 
                className="bg-white shadow-sm rounded-lg p-4 mb-3 flex items-center cursor-pointer hover:bg-gray-100 transition"
                onClick={() => handleChatSelect(user.id)}
              >
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4">
                  {user.avatarInitials}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold">{user.name}</h3>
                    <span className="text-sm text-gray-500">
                      {conversation.lastMessageTime}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600 text-sm truncate max-w-[300px]">
                      {conversation.messages[0].text.substring(0, 40)}...
                    </p>
                    {conversation.unreadCount > 0 && (
                      <span className="bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                        {conversation.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
                <ChevronRight className="text-gray-400" />
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}

export default ChatListPage;