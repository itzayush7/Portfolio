import { createContext, useContext, useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const ChatContext = createContext();

const initialMessages = [
  { sender: 'ai', text: "Hi there! I'm Ayush's AI assistant. I can tell you about his skills, projects, and experience. How can I help you today?" }
];

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('chatHistory');
    return saved ? JSON.parse(saved) : initialMessages;
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(messages));
  }, [messages]);

  const toggleChat = () => setIsOpen(prev => !prev);

  const clearChat = () => {
    setMessages(initialMessages);
    localStorage.removeItem('chatHistory');
  };

  const addMessage = (message) => {
    setMessages(prev => [...prev, message]);
  };

  const updateLastMessage = (textFragment) => {
    setMessages(prev => {
      const newArray = [...prev];
      newArray[newArray.length - 1].text += textFragment;
      return newArray;
    });
  };

  const callGemini = async (userText) => {
    setIsTyping(true);
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

    if (!API_KEY) {
      setTimeout(() => {
        setIsTyping(false);
        addMessage({ 
          sender: 'ai', 
          text: "I'm running in offline simulation mode without a Gemini key! Ayush is a MERN Stack Developer. Check out his GitHub at itzayush7." 
        });
      }, 1000);
      return;
    }

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      
      const systemPrompt = `You are the personal AI assistant for Ayush Mishra, a Full Stack Developer from Lucknow, India.
Here is your knowledge base:
- Email: mishraayush986@gmail.com
- LinkedIn: https://www.linkedin.com/in/ayush-mishra-040a3b261
- GitHub: https://github.com/itzayush7
- Profile: Results-driven Full-Stack Developer skilled in building scalable web applications using React.js, Node.js, and MongoDB.
- Experience: Web Developer Intern at Zidio Development (April 2025 – July 2025). Built apps serving 1000+ users, reduced API response time by 40%, improved mobile engagement by 35%. 
- Tech Stack: React.js, Node.js, Express, MongoDB, JavaScript, HTML/CSS, Tailwind, SQL.
- Projects: 1) Wanderlust (travel and accommodation platform), 2) Excel Analytics Platform (handles 100,000+ rows, JWT auth, Chart.js), 3) BlogBlaze (MERN blogging platform with admin dashboard), 4) WeatherLens App.
- Education: BCA from Dr. Ram Manohar Lohia Avadh University (2022-2025).
- Achievements: AI Fundamentals Certification, Deloitte Technology Job Simulation.
Respond concisely and professionally in a friendly tone as an assistant representing Ayush. Keep responses relatively short format.`;

      // Using gemini-3-flash-preview as requested by user settings
      const model = genAI.getGenerativeModel({ 
        model: 'gemini-3-flash-preview',
        systemInstruction: systemPrompt 
      });

      // Map messages: Skip the first greeting which is just UI filler
      const pastMessages = messages.slice(1).map(m => ({
        role: m.sender === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }));

      const chat = model.startChat({
        history: pastMessages,
      });

      const result = await chat.sendMessageStream(userText);

      setIsTyping(false);
      
      // Initialize the AI message in state
      addMessage({ sender: 'ai', text: "" });

      let fullResponseText = "";
      
      try {
        for await (const chunk of result.stream) {
          const chunkText = chunk.text();
          
          // Smart accumulation logic: 
          // Detect if the SDK is returning the full text so far or just the delta.
          if (chunkText.startsWith(fullResponseText) && chunkText.length > fullResponseText.length) {
            fullResponseText = chunkText;
          } else {
            fullResponseText += chunkText;
          }
          
          // Overwrite the last message with the full accumulated text to prevent duplication
          setMessages(prev => {
            const newArray = [...prev];
            if (newArray.length > 0) {
              newArray[newArray.length - 1].text = fullResponseText;
            }
            return newArray;
          });
        }
      } catch (streamError) {
        console.error("Stream break detected:", streamError);
        if (!fullResponseText) throw streamError;
      }

    } catch (error) {
      console.error("Gemini API error:", error);
      setIsTyping(false);
      setTimeout(() => {
        addMessage({ sender: 'ai', text: "I encountered a technical glitch while thinking! Please try again or reach out to Ayush via LinkedIn/Email if this persists." });
      }, 500);
    }
  };

  const sendMessage = (text) => {
    addMessage({ sender: 'user', text });
    callGemini(text); // Using Gemini instead of OpenAI
  };

  return (
    <ChatContext.Provider value={{ messages, isOpen, isTyping, toggleChat, sendMessage, clearChat }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext);
