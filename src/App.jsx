import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot/Chatbot';
import Cursor from './components/Cursor';
import { ThemeProvider } from './context/ThemeContext';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <ThemeProvider>
      <ChatProvider>
        <Cursor />
        <div className="min-h-screen bg-background transition-colors duration-300">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </ChatProvider>
    </ThemeProvider>
  );
}

export default App;
