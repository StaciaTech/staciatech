
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, X, Send, ThumbsUp, ThumbsDown, Mic, MicOff } from 'lucide-react';
import { gsap } from 'gsap';

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
      text: 'Hello! I\'m Stacia AI, your intelligent assistant. I can help you learn about our services, products, and how we can transform your business. How can I assist you today?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const recognition = useRef<SpeechRecognition | null>(null);

  // Enhanced bot responses with more context
  const botResponses = {
    'services': 'Stacia Tech offers comprehensive digital solutions:\n\n🎨 **Design Services** - UI/UX, wireframing, prototyping\n💻 **Development** - Web, mobile, custom software\n☁️ **DevOps & Infrastructure** - Cloud solutions, CI/CD\n📊 **Data & Analytics** - Business intelligence, visualization\n🔧 **Maintenance & Support** - 24/7 monitoring, optimization\n✅ **Quality Assurance** - Comprehensive testing\n🎯 **Consulting** - Digital transformation guidance\n\nWhich service interests you most?',
    
    'products': 'Our innovative AI-powered products include:\n\n🚀 **Stellar Labs** - AI Agent development platform\n⭐ **Stello** - AI-enabled ERP system\n📅 **Stacia Calendar** - Smart scheduling solution\n📋 **Stacia Forms** - Dynamic forms platform\n💰 **Stacia Reimbursement** - Expense management\n🛒 **Stacia Procurement** - Purchase management\n🚛 **Stacia Logistics** - Supply chain optimization\n🌾 **Stacia Farmer** - Agricultural management\n💬 **Stacia Chat** - Team communication\n\nWould you like details about any specific product?',
    
    'ai': 'We\'re at the forefront of AI innovation! Our AI capabilities include:\n\n🧠 **Machine Learning** - Custom ML models\n🤖 **AI Agents** - Intelligent automation\n📈 **Predictive Analytics** - Data-driven insights\n🔍 **Computer Vision** - Image & video analysis\n💬 **Natural Language Processing** - Text understanding\n🎯 **Recommendation Systems** - Personalized experiences\n\nOur **Stellar Labs** division specifically focuses on creating cutting-edge AI solutions. How can AI transform your business?',
    
    'contact': 'Ready to start your digital transformation? Here\'s how to reach us:\n\n📧 **Email**: hello@staciatech.com\n📞 **Phone**: +1 (555) 123-4567\n🌐 **Website**: www.staciatech.com\n📍 **Office**: Global presence with local expertise\n\nWe typically respond within 2 hours during business hours. Would you like me to help you prepare questions for our team?',
    
    'careers': 'Join our innovative team! We\'re looking for:\n\n👩‍💻 **Developers** - React, Node.js, Python, AI/ML\n🎨 **Designers** - UI/UX, product design\n🤖 **AI Specialists** - Machine learning engineers\n☁️ **DevOps Engineers** - Cloud infrastructure\n💼 **Consultants** - Digital transformation\n\nWe offer competitive salaries, flexible work, continuous learning, and the chance to work on cutting-edge projects. Check our careers page for current openings!',
    
    'pricing': 'Our pricing is tailored to your specific needs:\n\n💡 **Consultation** - Free initial assessment\n📊 **Project-based** - Fixed scope, clear deliverables\n⏰ **Time & Materials** - Flexible, hourly rates\n🔄 **Retainer** - Ongoing support and development\n📈 **Enterprise** - Custom packages for large organizations\n\nWe provide detailed quotes after understanding your requirements. Would you like to schedule a free consultation?',
    
    'about': 'Stacia Tech is a leading digital transformation company founded in 2019. We specialize in:\n\n✨ **Mission**: Empowering businesses with intelligent digital solutions\n🎯 **Vision**: Leading AI-powered transformation globally\n🏆 **Achievement**: 500+ projects, 50+ enterprise clients\n🌍 **Reach**: Global presence, local expertise\n\nWe combine technical excellence with business acumen to deliver solutions that drive real results. What would you like to know more about?',
    
    'default': 'That\'s an interesting question! I\'m here to help you learn about Stacia Tech\'s services, products, and how we can help transform your business.\n\nYou can ask me about:\n• Our services and solutions\n• AI products and capabilities\n• Pricing and consultation\n• Career opportunities\n• Company information\n\nWhat would you like to explore?'
  };

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = false;
      recognition.current.interimResults = false;
      recognition.current.lang = 'en-US';

      recognition.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };

      recognition.current.onerror = () => {
        setIsListening(false);
      };

      recognition.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  // Animate chat opening
  useEffect(() => {
    if (isOpen && chatRef.current) {
      gsap.fromTo(chatRef.current, 
        { scale: 0.8, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: 'back.out(1.7)' }
      );
    }
  }, [isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const getResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('service') || input.includes('what do you do') || input.includes('solutions')) {
      return botResponses.services;
    } else if (input.includes('product') || input.includes('stellar') || input.includes('stello') || input.includes('calendar') || input.includes('forms')) {
      return botResponses.products;
    } else if (input.includes('ai') || input.includes('artificial intelligence') || input.includes('machine learning') || input.includes('ml')) {
      return botResponses.ai;
    } else if (input.includes('contact') || input.includes('reach') || input.includes('email') || input.includes('phone')) {
      return botResponses.contact;
    } else if (input.includes('career') || input.includes('job') || input.includes('hiring') || input.includes('work')) {
      return botResponses.careers;
    } else if (input.includes('price') || input.includes('cost') || input.includes('quote') || input.includes('pricing')) {
      return botResponses.pricing;
    } else if (input.includes('about') || input.includes('company') || input.includes('stacia') || input.includes('who are you')) {
      return botResponses.about;
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
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(input),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);

    setInput('');
  };

  const handleFeedback = (messageId: string, type: 'positive' | 'negative') => {
    setFeedback(prev => {
      const newFeedback = [...prev, { messageId, type }];
      // Here you could send feedback to your analytics service
      console.log('Feedback submitted:', { messageId, type });
      return newFeedback;
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const startListening = () => {
    if (recognition.current && !isListening) {
      setIsListening(true);
      try {
        recognition.current.start();
      } catch (error) {
        console.error('Speech recognition error:', error);
        setIsListening(false);
      }
    }
  };

  const stopListening = () => {
    if (recognition.current && isListening) {
      recognition.current.stop();
      setIsListening(false);
    }
  };

  return (
    <>
      {/* Enhanced Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl z-50 transition-all duration-300 ${
          isOpen ? 'scale-0' : 'scale-100 hover:scale-110'
        } bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 group`}
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
      </Button>

      {/* Enhanced Chat Window */}
      {isOpen && (
        <Card ref={chatRef} className="fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl z-50 border-0 overflow-hidden bg-white">
          <CardHeader className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Stacia AI Assistant</CardTitle>
                <p className="text-sm text-violet-100">Always here to help</p>
              </div>
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
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      message.isBot
                        ? 'bg-white text-gray-800 shadow-sm border border-gray-100'
                        : 'bg-gradient-to-r from-violet-600 to-purple-600 text-white'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <div className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    {message.isBot && (
                      <div className="flex items-center space-x-2 mt-3 pt-2 border-t border-gray-100">
                        <span className="text-xs text-gray-500">Was this helpful?</span>
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
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce animation-delay-200"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce animation-delay-400"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Enhanced Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Stacia Tech..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-sm"
                />
                <Button
                  onClick={isListening ? stopListening : startListening}
                  className={`p-3 rounded-xl ${isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-500 hover:bg-gray-600'}`}
                  size="sm"
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </Button>
                <Button
                  onClick={sendMessage}
                  className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 p-3 rounded-xl"
                  size="sm"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              {isListening && (
                <p className="text-xs text-violet-600 mt-2 animate-pulse">Listening...</p>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
