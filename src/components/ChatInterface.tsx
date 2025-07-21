import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Heart, BookOpen, Volume2, VolumeX } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'suggestion';
}

interface ChatInterfaceProps {
  onClose: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Chat Guru, your AI mentor and wellness companion. I'm here to help with your studies, career guidance, and mental wellbeing. What would you like to talk about today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState('wise');
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const avatarOptions = [
    { id: 'wise', name: 'Wise Guru', emoji: '🧙‍♂️', personality: 'Thoughtful and deep' },
    { id: 'friendly', name: 'Friendly Guide', emoji: '😊', personality: 'Warm and encouraging' },
    { id: 'calm', name: 'Calm Spirit', emoji: '🧘‍♀️', personality: 'Peaceful and soothing' },
    { id: 'energetic', name: 'Motivational Coach', emoji: '⚡', personality: 'Energetic and inspiring' },
  ];

  const quickSuggestions = [
    "I'm feeling stressed about exams",
    "Help me plan my study schedule",
    "What career options do I have?",
    "I need motivation to study",
    "How do I manage exam anxiety?",
    "Tell me about NEET preparation",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text: string = inputText) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = {
        stress: "I understand you're feeling stressed about exams. This is completely normal! Let's work through this together. Here are some strategies that can help: 1) Break your study material into smaller chunks, 2) Practice deep breathing exercises, 3) Take regular breaks, 4) Remember that your worth isn't defined by grades. Would you like me to guide you through a quick breathing exercise?",
        schedule: "I'd love to help you create a personalized study schedule! To get started, could you tell me: 1) What subjects are you studying? 2) How many hours can you dedicate to studying each day? 3) When are your exams? 4) Are there any subjects you find particularly challenging? With this information, I can create a balanced schedule that includes study time, breaks, and even some fun activities!",
        career: "Exploring career options is exciting! There are so many paths you can take. To give you the best guidance, could you share: 1) What subjects do you enjoy most? 2) What activities make you feel energized? 3) Are you more interested in working with people, data, or creative projects? 4) Do you prefer structured environments or flexible settings? Let's discover what aligns with your strengths and interests!",
        motivation: "I'm here to remind you that every step you take is progress, no matter how small! 🌟 Remember why you started this journey - your dreams and goals are valid and achievable. You've overcome challenges before, and you can do it again. What specifically would help motivate you right now? A study plan, success stories, or maybe just someone to remind you of your strengths?",
        anxiety: "Exam anxiety is something many students face, and there are proven ways to manage it. Here are some techniques: 1) Progressive muscle relaxation, 2) Positive self-talk, 3) Proper preparation with practice tests, 4) Healthy sleep and eating habits, 5) Mindfulness exercises. Would you like me to walk you through any of these techniques? Remember, some nervousness is normal and can actually help you perform better!",
        neet: "NEET preparation requires a strategic approach! Here's a comprehensive plan: 1) Master NCERT textbooks first, 2) Practice previous years' questions, 3) Take regular mock tests, 4) Focus on Physics, Chemistry, and Biology equally, 5) Create a timetable with regular revisions. Which subject would you like to start with? I can provide specific strategies for each subject and help you create a study timeline based on your exam date.",
      };

      const getResponse = (userText: string) => {
        const lowerText = userText.toLowerCase();
        if (lowerText.includes('stress') || lowerText.includes('overwhelm')) return responses.stress;
        if (lowerText.includes('schedule') || lowerText.includes('plan')) return responses.schedule;
        if (lowerText.includes('career') || lowerText.includes('job')) return responses.career;
        if (lowerText.includes('motivation') || lowerText.includes('inspire')) return responses.motivation;
        if (lowerText.includes('anxiety') || lowerText.includes('nervous')) return responses.anxiety;
        if (lowerText.includes('neet') || lowerText.includes('medical')) return responses.neet;
        
        return "That's a great question! I'm here to help with your studies, career guidance, and mental wellbeing. Could you tell me more about what specific support you're looking for? Whether it's academic help, career advice, or just someone to talk to, I'm here for you. 😊";
      };

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(text),
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-rose-500 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl">
                {avatarOptions.find(a => a.id === selectedAvatar)?.emoji}
              </div>
              <div>
                <h2 className="text-xl font-bold">Chat Guru</h2>
                <p className="text-purple-100 text-sm">
                  {avatarOptions.find(a => a.id === selectedAvatar)?.personality}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setVoiceEnabled(!voiceEnabled)}
                className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all"
              >
                {voiceEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Avatar Selection */}
          <div className="mt-4 flex space-x-2">
            {avatarOptions.map((avatar) => (
              <button
                key={avatar.id}
                onClick={() => setSelectedAvatar(avatar.id)}
                className={`p-2 rounded-lg text-xs transition-all ${
                  selectedAvatar === avatar.id
                    ? 'bg-white bg-opacity-30'
                    : 'bg-white bg-opacity-10 hover:bg-opacity-20'
                }`}
              >
                <div className="text-lg">{avatar.emoji}</div>
                <div className="text-xs">{avatar.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-purple-600 to-rose-500 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.sender === 'bot' && (
                    <div className="text-sm">
                      {avatarOptions.find(a => a.id === selectedAvatar)?.emoji}
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-purple-200' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 px-4 py-2 rounded-2xl">
                <div className="flex items-center space-x-2">
                  <div className="text-sm">
                    {avatarOptions.find(a => a.id === selectedAvatar)?.emoji}
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestions */}
        <div className="px-6 py-2 border-t border-gray-200">
          <div className="flex space-x-2 overflow-x-auto">
            {quickSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSend(suggestion)}
                className="flex-shrink-0 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs hover:bg-purple-200 transition-all"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex space-x-4">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
            <button
              onClick={() => handleSend()}
              disabled={!inputText.trim()}
              className="bg-gradient-to-r from-purple-600 to-rose-500 text-white p-2 rounded-full hover:from-purple-700 hover:to-rose-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;