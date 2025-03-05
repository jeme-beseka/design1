// src/components/chat/types/chatTypes.js

// Constants instead of enums
export const MessageType = {
    TEXT: 'text',
    IMAGE: 'image',
    VOICE: 'voice'
  };
  
  export const SenderType = {
    CUSTOMER: 'customer',
    VENDOR: 'vendor'
  };
  
  // Prop type validation can be handled with PropTypes later if needed
  export const createMessage = (props = {}) => ({
    id: props.id || Date.now().toString(),
    sender: props.sender || SenderType.VENDOR,
    text: props.text || '',
    timestamp: props.timestamp || new Date().toISOString(),
    type: props.type || MessageType.TEXT,
    status: props.status || 'sent'
  });
  
  export const createChatUser = (props = {}) => ({
    id: props.id || Date.now().toString(),
    name: props.name || 'Unknown User',
    avatarUrl: props.avatarUrl || null,
    avatarInitials: props.avatarInitials || props.name?.substring(0, 2).toUpperCase() || 'UN',
    location: props.location || '',
    lastActive: props.lastActive || null
  });
  
  export const createChatConversation = (props = {}) => ({
    id: props.id || Date.now().toString(),
    participants: props.participants || [],
    messages: props.messages || [],
    unreadCount: props.unreadCount || 0,
    lastMessageTimestamp: props.lastMessageTimestamp || new Date().toISOString()
  });