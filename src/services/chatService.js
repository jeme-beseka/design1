// src/services/chatService.js
import axios from 'axios';

class ChatService {
  constructor() {
    this.baseUrl = '/api/vendor/chats';
  }

  // Fetch all conversations for a vendor
  async getConversations() {
    try {
      const response = await axios.get(this.baseUrl);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch conversations', error);
      throw error;
    }
  }

  // Fetch messages for a specific conversation
  async getConversationMessages(conversationId) {
    try {
      const response = await axios.get(`${this.baseUrl}/${conversationId}/messages`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch messages', error);
      throw error;
    }
  }

  // Send a new message
  async sendMessage(conversationId, message) {
    try {
      const response = await axios.post(`${this.baseUrl}/${conversationId}/messages`, message);
      return response.data;
    } catch (error) {
      console.error('Failed to send message', error);
      throw error;
    }
  }
}

export default new ChatService();