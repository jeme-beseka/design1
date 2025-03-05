import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Paperclip, Mic, Send, Image, Smile 
} from 'lucide-react';
import Sidebar from './Sidebar';
import Header from './Header';

const mockChatUsers = [
  { 
    id: '1', 
    name: 'Emily Johnson', 
    location: 'New York, NY', 
    avatarInitials: 'EJ' 
  }
];

const mockMessages = [
  {
    id: 'm1',
    sender: 'customer',
    text: 'Hi there, I have a question about my recent order.',
    timestamp: '2024-03-05T10:30:00Z',
    type: 'text'
  },
  {
    id: 'm2',
    sender: 'vendor',
    text: 'Hello! I\'d be happy to help you. What can I assist you with?',
    timestamp: '2024-03-05T10:35:00Z',
    type: 'text'
  }
];

function ChatDetailPage() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const user = mockChatUsers.find(u => u.id === userId);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: `m${messages.length + 1}`,
        sender: 'vendor',
        text: newMessage,
        timestamp: new Date().toISOString(),
        type: 'text'
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="bg-gray-100 max-h-screen flex p-6 rounded-lg shadow">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isMobileMenuOpen={isMobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
      />
      
      <div className="flex-1 lg:ml-64">
        <Header toggleMobileMenu={toggleMobileMenu} />
        
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-white shadow-sm p-4 flex items-center">
            <button 
              onClick={() => navigate('/vendor/chat')} 
              className="mr-4 text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft size={24} />
            </button>
            
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4">
              {user?.avatarInitials}
            </div>
            
            <div>
              <h2 className="font-bold">{user?.name}</h2>
              <p className="text-sm text-gray-500">{user?.location}</p>
            </div>
          </div>
          
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex mb-4 ${
                  message.sender === 'vendor' ? 'justify-start' : 'justify-end'
                }`}
              >
                <div 
                  className={`max-w-[70%] p-3 rounded-lg ${
                    message.sender === 'vendor' 
                      ? 'bg-white shadow-sm' 
                      : 'bg-blue-500 text-white'
                  }`}
                >
                  <p>{message.text}</p>
                  <p className="text-xs text-right mt-1 opacity-70">
                    {new Date(message.timestamp).toLocaleTimeString([], {
                      hour: '2-digit', 
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Message Input */}
          <div className="bg-white p-4 border-t flex items-center space-x-2">
            <button className="text-gray-600 hover:text-gray-800">
              <Paperclip size={20} />
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <Image size={20} />
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <Mic size={20} />
            </button>
            <div className="flex-1 relative">
              <input 
                type="text" 
                placeholder="Type a message..." 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="w-full border rounded-full px-4 py-2 pr-10"
              />
              <button 
                onClick={handleSendMessage}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatDetailPage;