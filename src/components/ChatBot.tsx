
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, X, Send, ThumbsUp, ThumbsDown } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface Feedback {
  messageId: string;
  type: 'positive' | 'negative';
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI assistant. How can I help you learn more about Stacia Tech?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState<Feedback[]>([]);

  const botResponses = {
    'services': 'Stacia Tech offers comprehensive digital solutions including Design Services, Development, DevOps, Data Analytics, QA Testing, and AI Innovation. Would you like to know more about any specific service?',
    'products': 'Our innovative products include Stellar Labs (AI Agent platform), Stello (AI-enabled ERP), Stacia Calendar, Forms, and specialized apps for various industries. Which product interests you most?',
    'ai': 'We specialize in AI-powered solutions including machine learning, automation, and intelligent systems. Our AI Innovation Lab creates cutting-edge products that drive business transformation.',
    'contact': 'You can reach us at hello@staciatech.com or call +1 (555) 123-4567. We\'d love to discuss your project requirements!',
    'careers': 'We\'re always looking for talented individuals! Check out our careers page for current openings in development, design, AI, and consulting roles.',
    'pricing': 'Our pricing is customized based on your specific needs and project scope. Contact us for a detailed quote tailored to your requirements.',
    'default': 'That\'s a great question! I\'d recommend contacting our team directly for detailed information. Is there anything specific about our services or products you\'d like to know?'
  };

  const getResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('service') || input.includes('what do you do')) {
      return botResponses.services;
    } else if (input.includes('product') || input.includes('stellar') || input.includes('stello')) {
      return botResponses.products;
    } else if (input.includes('ai') || input.includes('artificial intelligence') || input.includes('machine learning')) {
      return botResponses.ai;
    } else if (input.includes('contact') || input.includes('reach') || input.includes('email')) {
      return botResponses.contact;
    } else if (input.includes('career') || input.includes('job') || input.includes('hiring')) {
      return botResponses.careers;
    } else if (input.includes('price') || input.includes('cost') || input.includes('quote')) {
      return botResponses.pricing;
    } else {
      return botResponses.default;
    }
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(input),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInput('');
  };

  const handleFeedback = (messageId: string, type: 'positive' | 'negative') => {
    setFeedback(prev => [...prev, { messageId, type }]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-2xl z-50 transition-all duration-300 ${
          isOpen ? 'scale-0' : 'scale-100 hover:scale-110'
        } stacia-button-primary`}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 border-0 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Stacia AI Assistant</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0 h-full flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-gradient-to-r from-violet-600 to-purple-600 text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    {message.isBot && (
                      <div className="flex items-center space-x-2 mt-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFeedback(message.id, 'positive')}
                          className="h-6 w-6 p-0 hover:bg-green-100"
                          disabled={feedback.some(f => f.messageId === message.id)}
                        >
                          <ThumbsUp className="w-3 h-3 text-green-600" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFeedback(message.id, 'negative')}
                          className="h-6 w-6 p-0 hover:bg-red-100"
                          disabled={feedback.some(f => f.messageId === message.id)}
                        >
                          <ThumbsDown className="w-3 h-3 text-red-600" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Stacia Tech..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm"
                />
                <Button
                  onClick={sendMessage}
                  className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
                  size="sm"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
