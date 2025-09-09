import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About, Contact, Hero, Navbar, Tech, Works, StarsCanvas} from './components';
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { v4 as uuidv4 } from 'uuid';


const App = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [conversation, setConversation] = useState([]);
  const [sessionId, setSessionId] = useState(null);

  const FlaskAppUrl = 'https://api.chatbot.parthkhanna.me/demo';

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  useEffect(() => {
    function getSessionId() {
      let sessionId = localStorage.getItem('sessionId');
      if (!sessionId) {
        sessionId = uuidv4();
        localStorage.setItem('sessionId', sessionId);
      }
      return sessionId;
    }


    const newSessionId = getSessionId();
    setSessionId(newSessionId);
    console.log("Session ID: ", newSessionId);


    return () => {

    };
  }, []);

  const closeChat = () => {
    setChatVisible(false);
  };

  const sendMessage = (content) => {
    if (!sessionId) {
      console.error("Session ID is not defined");
      return;
    }

    const userInput = content.trim();
    if (userInput === "") {
      return;
    }


    setMessages([...messages, { role: 'user', content: userInput }]);


    document.getElementById("userInput").value = "";

    $.ajax({
      type: "POST",
      url: `${FlaskAppUrl}/api/send-message`,
      contentType: "application/json",
      data: JSON.stringify({
        message: userInput,
        chatHistory: messages,
        sessionId: sessionId
      }),
      success: function(response) {
        console.log("Sent: ", userInput)
        console.log("AI Response: ", response.response)
        setMessages(prevMessages => [
          ...prevMessages,
          { role: 'assistant', content: response.response }
        ]);
        setConversation(prevConversation => [
          ...prevConversation,
          { role: "user", content: userInput },
          { role: "assistant", content: response.response }
        ]);
      },
      error: function(xhr, status, error) {
        console.error("Error:", JSON.stringify(error));
        console.error("Status:", status);
        console.error("XHR:", xhr);
      }
    });
  };

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
        <button onClick={toggleChat} style={{ background: '#262BDC', borderRadius: '10px', position: 'fixed', top: '90%', right: 10, padding: '20px', zIndex: 500 }}>
          Questions?
        </button>
        {chatVisible && (
          <div className="chatArea">
            <button onClick={closeChat} style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1000, color: 'white'}}>X</button>
            <div className="chat-container" id="chatContainer" style={{ width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', overflowY: 'auto', flex: '1', zIndex: 9999}}>
              {messages.map((content) => {
                const messageId = uuidv4(); // Generate a unique ID for each message
                return (
                  <div key={messageId} className={content.role === 'user' ? 'chat-message user-message' : 'chat-message other-message'}>
                    {content.content}
                  </div>
                );
              })}
            </div>

            <div className="input-container" style={{ width: '100%', padding: '10px' }}>
              <input id="userInput" type="text" placeholder="Enter your message here" maxLength="50" style={{ width: 'calc(100% - 70px)', padding: '8px', marginRight: '10px' }} />
              <button onClick={() => sendMessage(document.getElementById("userInput").value)} style={{ width: '60px', padding: '8px', zIndex: 9999}}>Send</button>
            </div>
          </div>
        )}
      </div>

    </BrowserRouter>
  )
}

export default App;
