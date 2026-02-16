import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg1 from "./assets/bg1.jpg";
import bg2 from "./assets/bg2.jpg";
import bg3 from "./assets/bg3.jpg";
import bg4 from "./assets/bg4.jpg";
import bg5 from "./assets/bg5.jpg";
import bg6 from "./assets/bg6.jpg";
import bg7 from "./assets/bg7.jpg";
import cakeImg from "./assets/cakee.png";

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentNote, setCurrentNote] = useState(null);
  const [candleBlown, setCandleBlown] = useState(false);
  const [stars, setStars] = useState([]);
  

  // Love notes content
  const loveNotes = [
    "Every moment with you feels like a beautiful dream I never want to wake up from.",
    "Your smile is my favorite sunrise and your laugh my favorite melody.",
    "In your eyes, I found a home I never knew I was searching for.",
    "Loving you is the easiest and most natural thing I've ever done.",
    "You make my heart feel like it has wings. Happy birthday, my love.",
    "With you, even ordinary days feel like magical adventures.",
    "You are the missing piece I never knew my heart needed.",
    "My love for you grows deeper with every passing moment we share."
  ];

  // Generate floating stars for the wish page
  useEffect(() => {
    if (currentPage === 6 && !candleBlown) {
      const newStars = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        size: Math.random() * 8 + 4,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 2
      }));
      setStars(newStars);
    }
  }, [currentPage, candleBlown]);

  // Page components
const LandingPage = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setCurrentPage(1)}
      className="cursor-pointer text-center"
    >
      <div className="relative">

        {/* YOUR REAL CAKE IMAGE */}
        <img
  src={cakeImg}
  alt="Birthday Cake"
  className="w-64 md:w-80 lg:w-96 mx-auto drop-shadow-2xl transition-all duration-300 hover:scale-105"
/>


        <div className="mt-6">
          <h1 
            className="text-4xl md:text-5xl font-serif font-bold text-[#8c6d46] mb-2"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Happy 22nd Birthday, Yash
          </h1>
          <p className="text-lg text-[#a88c6d] mt-2">
            Click the cake to begin your celebration
          </p>
        </div>
      </div>
    </motion.div>
    
    <div className="absolute bottom-8 text-[#a88c6d] text-sm">
      A romantic birthday surprise just for you
    </div>
  </motion.div>
);


  const MenuPage = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
     className="min-h-screen py-12 px-4 relative"

    >
      <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>



      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#8c6d46] mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
          Welcome to Your Birthday Celebration
        </h1>
        <p className="text-xl text-[#a88c6d] mb-12 max-w-2xl mx-auto">
          Choose a special gift to open first. Each holds a unique surprise just for you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "A Heartfelt Message", desc: "Words from the heart", icon: "💌", page: 2 },
            { title: "Love Notes Jar", desc: "Random romantic surprises", icon: "🍯", page: 3 },
            { title: "The Daily Love Times", desc: "Special birthday edition", icon: "📰", page: 4 },
            { title: "Our Special Playlist", desc: "Songs that tell our story", icon: "🎶", page: 5 },
            { title: "Make a Wish", desc: "Blow out the candle", icon: "🕯️", page: 6 }
          ].map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCurrentPage(item.page)}
              className="bg-white rounded-xl p-6 shadow-md border border-[#f0e0d0] hover:shadow-lg transition-shadow relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#fff8f0] to-[#f8e9e1] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-5xl mb-4">{item.icon}</div>
              <h2 className="text-2xl font-bold text-[#8c6d46] mb-2">{item.title}</h2>
              <p className="text-[#a88c6d]">{item.desc}</p>
            </motion.button>
          ))}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPage(0)}
          className="mt-12 text-[#a88c6d] hover:text-[#8c6d46] transition-colors flex items-center mx-auto"
        >
          <span className="mr-2">←</span> Return to landing page
        </motion.button>
      </div>
    </motion.div>
  );

  const MessagePage = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen py-16 px-4 relative flex items-center"

    >
      <div className="absolute inset-0 bg-white/10"></div>

      
      <div className="max-w-3xl mx-auto bg-white bg-opacity-90 rounded-2xl p-8 md:p-12 shadow-xl relative z-10 border border-[#f0e0d0]">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#8c6d46] mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
            For My Dearest Yash
          </h1>
          <div className="w-24 h-1 bg-[#e6c597] mx-auto rounded-full"></div>
        </div>
        
        <div className="prose max-w-none text-lg leading-relaxed text-[#5a4a35]">
          <p className="mb-6">
            As you turn 22 today, I find myself overwhelmed with gratitude for having you in my life. 
            You've brought a light into my world that makes every ordinary moment extraordinary.
          </p>
          <p className="mb-6">
            Your kindness, your laughter, and the way your eyes crinkle when you smile these are the things 
            that have captured my heart completely. You make me believe in the magic of love every single day.
          </p>
          <p className="mb-6">
            This birthday marks another year of your beautiful journey, and I feel so blessed to be a part of it. 
            May this year bring you as much joy as you've brought into my life. You deserve all the happiness 
            in the world, today and always.
          </p>
          <p className="text-right mt-8 font-serif italic text-[#8c6d46]" style={{ fontFamily: "'Dancing Script', cursive" }}>
            With all my love,<br />
            Your forever admirer
          </p>
        </div>
        
        <div className="mt-10 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage(1)}
            className="bg-[#f8c8a0] text-[#8c6d46] font-semibold py-3 px-8 rounded-full hover:bg-[#f5b890] transition-colors shadow-md"
          >
            Return to Menu
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  const LoveNotesPage = () => {
    const handleDrawNote = () => {
      const randomIndex = Math.floor(Math.random() * loveNotes.length);
      setCurrentNote(loveNotes[randomIndex]);
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="min-h-screen py-16 px-4 relative flex items-center"
      >
        <div className="absolute inset-0 bg-white/10"></div>

        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#8c6d46] mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
            Love Notes Jar
          </h1>
          <p className="text-xl text-[#a88c6d] mb-12 max-w-2xl mx-auto">
            Click the jar to draw a random love note just for you
          </p>
          
          <div className="flex justify-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDrawNote}
              className="cursor-pointer relative"
            >
              {/* Jar illustration */}
              <div className="bg-[#e6d3c5] w-48 h-64 rounded-b-3xl border-4 border-[#d4c8a8] relative overflow-hidden">
                <div className="bg-[#f0e8e0] w-40 h-56 rounded-b-2xl mx-auto mt-4 border-2 border-[#d4c8a8]"></div>
                <div className="absolute top-4 left-4 w-40 h-2 bg-[#d4c8a8] rounded-full"></div>
                <div className="absolute top-6 left-6 w-36 h-1 bg-[#c8b898] rounded-full"></div>
                {/* Jar highlights */}
                <div className="absolute top-16 left-8 w-2 h-24 bg-white/30 rounded-full"></div>
                <div className="absolute top-20 right-8 w-1.5 h-20 bg-white/20 rounded-full"></div>
              </div>
              <div className="mt-4 text-[#8c6d46] font-semibold">Click to Draw a Note</div>
            </motion.div>
          </div>
          
          <AnimatePresence mode="wait">
            {currentNote && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-xl p-8 max-w-2xl mx-auto shadow-lg border border-[#f0e0d0] relative"
              >
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#ffd3d3] rounded-full opacity-30"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#c5e6e8] rounded-full opacity-20"></div>
                
                <div 
                  className="text-lg italic text-[#8c6d46] leading-relaxed"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  "{currentNote}"
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentNote(null)}
                  className="mt-6 bg-[#f8c8a0] text-[#8c6d46] font-semibold py-2 px-6 rounded-full hover:bg-[#f5b890] transition-colors"
                >
                  Draw Another Note
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(1)}
              className="text-[#a88c6d] hover:text-[#8c6d46] transition-colors flex items-center mx-auto"
            >
              <span className="mr-2">←</span> Return to Menu
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  };
const NewspaperPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="min-h-screen py-12 px-4 relative"
  >
    {/* Background overlay */}
    <div className="absolute inset-0 bg-[#f5e9dc]/40 pointer-events-none"></div>

    <div className="max-w-5xl mx-auto relative z-10">
      
      {/* Newspaper Content */}
      <div
        id="newspaper-content"
        className="bg-[#f8f4e9] rounded-xl p-8 md:p-12 shadow-xl border-2 border-[#d4c8a8] relative overflow-hidden"
      >
        <div className="header mb-8 text-center">
          <div className="text-[#a88c6d] text-lg tracking-widest mb-2">
            EST. 2026 • ROMANCE EDITION
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold text-[#8c6d46]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            THE DAILY LOVE TIMES
          </h1>
          <div className="text-[#a88c6d] text-lg mt-2">
            Celebrating Life, Love, and Happiness
          </div>
        </div>

        <div className="headline text-center mb-10">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#8c6d46]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Yash Turns 22 Today 🎉
          </h2>
          <div className="text-xl text-[#a88c6d] mt-2">
            A Milestone Birthday Filled with Love and Joy
          </div>
        </div>

        <div className="article prose max-w-none text-lg leading-relaxed text-[#5a4a35]">
          <p>
            <span className="font-bold text-[#8c6d46]">ROMANCE, FEBRUARY 18</span> —
            Today marks a significant milestone as Yash celebrates their 22nd birthday surrounded by love and warm wishes.
          </p>
          <p>
            Known for their infectious laughter and compassionate heart, Yash has touched countless lives with kindness and genuine spirit.
          </p>
          <p>
            The celebration features vintage postcard aesthetics with peach and cream tones, reflecting elegance and warmth.
          </p>
          <p>
            As Yash blows out the candles, everyone hopes this year brings joy, success, and continued happiness.
          </p>
        </div>

        <div className="date text-center mt-8 pt-6 border-t border-[#d4c8a8] text-[#8c6d46] font-serif italic">
          With love, February 18, 2026
        </div>
      </div>

      {/* Download Button (UPDATED) */}
      <div className="mt-10 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/HIS.pdf"; // file inside public folder
            link.download = "HIS.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="bg-[#8c6d46] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#7a5e3d] transition-colors shadow-md flex items-center"
        >
          ↓ Download as PDF
        </motion.button>
      </div>

      {/* Return Button */}
      <div className="mt-8 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPage(1)}
          className="text-[#a88c6d] hover:text-[#8c6d46] transition-colors"
        >
          ← Return to Menu
        </motion.button>
      </div>

    </div>
  </motion.div>
);


 const PlaylistPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="min-h-screen bg-gradient-to-br from-[#e6c597] to-[#ffd3b6] py-16 px-4 relative flex items-center"
  >
    <div className="absolute inset-0 bg-white/10"></div>

    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h1
        className="text-4xl md:text-5xl font-serif font-bold text-[#8c6d46] mb-4"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        Our Birthday Playlist
      </h1>

      <p className="text-xl text-[#a88c6d] mb-12 max-w-2xl mx-auto">
        A collection of songs that tell our story. Perfect for celebrating your special day.
      </p>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#f0e0d0] max-w-3xl mx-auto">
        
        <div className="p-6 bg-[#f8e9e1] border-b border-[#f0e0d0]">
          <h2 className="text-2xl font-bold text-[#8c6d46]">
            Happy 22nd Birthday, Yash
          </h2>
          <p className="text-[#a88c6d] mt-1">
            A romantic journey through our memories
          </p>
        </div>

        <div className="p-6">

          {/* ✅ REAL SPOTIFY EMBED */}
          <div className="mb-6">
            <iframe
              title="Birthday Playlist"
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/7ywU61SlA8ZhVBAqakSHkR?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="https://open.spotify.com/playlist/7ywU61SlA8ZhVBAqakSHkR?si=3vaFttAKTNKxXVe0CYupgA"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1DB954] text-white font-bold py-3 px-8 rounded-full hover:bg-[#1ed760] transition-colors shadow-md flex items-center justify-center"
            >
              <span className="mr-2 text-xl">▶</span> Open in Spotify
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                navigator.clipboard.writeText(
                  "https://open.spotify.com/playlist/7ywU61SlA8ZhVBAqakSHkR?si=3vaFttAKTNKxXVe0CYupgA"
                );
                alert("Playlist link copied to clipboard!");
              }}
              className="bg-[#f8c8a0] text-[#8c6d46] font-semibold py-3 px-8 rounded-full hover:bg-[#f5b890] transition-colors shadow-md"
            >
              Copy Playlist Link
            </motion.button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPage(1)}
          className="text-[#a88c6d] hover:text-[#8c6d46] transition-colors flex items-center mx-auto"
        >
          <span className="mr-2">←</span> Return to Menu
        </motion.button>
      </div>
    </div>
  </motion.div>
);


  const WishPage = () => {
    useEffect(() => {
      if (!candleBlown) return;

        const timer = setTimeout(() => {
          setCurrentPage(1);
        }, 8000);
        return () => clearTimeout(timer);
      
    }, [] );

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-br from-[#e6c597] to-[#ffd3b6] flex flex-col items-center justify-center p-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/10"></div>

        <div className="text-center relative z-10 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
            Make a Wish
          </h1>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Close your eyes, make a wish, and blow out the candle. May all your dreams come true on your special day.
          </p>
          
          <div className="relative mb-12">
            {/* Cake illustration */}
            <div className="bg-[#f8c8a0] w-64 h-40 rounded-t-2xl mx-auto shadow-md relative overflow-hidden">
              <div className="bg-[#F0CFAA] h-1/3 w-full"></div>
              <div className="bg-[#d4a798] h-1/3 w-full absolute bottom-0"></div>

              {/* Candle */}
              <div className="absolute top-2 left-1/2 transform -translate-x-2/2 w-3 h-14 bg-[#e6c597] rounded"></div>
              {!candleBlown && (
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-[#ff9e9e] rounded-full border-2 border-[#ff7a7a]"
                ></motion.div>
              )}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCandleBlown(true)}
              disabled={candleBlown}
              className={`mt-6 px-8 py-3 rounded-full font-semibold text-lg transition-all ${
                candleBlown 
                  ? "bg-[#8c6d46] text-white cursor-default" 
                  : "bg-[#f8c8a0] text-[#8c6d46] hover:bg-[#f5b890]"
              }`}
            >
              {candleBlown ? "Wish Made! ✨" : "Blow Out the Candle"}
            </motion.button>
          </div>
          
          {/* Floating stars */}
          {candleBlown && (
            <div className="absolute inset-0 pointer-events-none">
              {stars.map((star) => (
                <motion.div
                  key={star.id}
                  initial={{ 
                    opacity: 0,
                    y: "100%",
                    x: `${star.left}%`
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: ["100%", "-100%"],
                    x: `${star.left}%`,
                    scale: [0.5, 1.2, 0.5]
                  }}
                  transition={{
                    duration: star.duration,
                    delay: star.delay,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute text-yellow-200"
                  style={{ 
                    fontSize: `${star.size}px`,
                    left: `${star.left}%`,
                    top: "100%"
                  }}
                >
                  ★
                </motion.div>
              ))}
            </div>
          )}
          
          {candleBlown && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white bg-opacity-90 rounded-2xl p-8 max-w-2xl mx-auto mt-8 relative z-20 border border-[#f0e0d0]"
            >
              <h2 className="text-3xl font-serif font-bold text-[#8c6d46] mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
                Your Wish Has Been Sent to the Stars
              </h2>
              <p className="text-xl text-[#a88c6d] mb-6">
                May your 22nd year be filled with love, joy, and all your heart desires. 
                This birthday marks the beginning of your most beautiful chapter yet.
              </p>
              <p className="text-lg italic text-[#8c6d46]" style={{ fontFamily: "'Dancing Script', cursive" }}>
                " The best is yet to come..."
              </p>
              
              <div className="mt-8 text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage(1)}
                  className="bg-[#f8c8a0] text-[#8c6d46] font-semibold py-3 px-8 rounded-full hover:bg-[#f5b890] transition-colors shadow-md"
                >
                  Return to Celebration
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    
   <div
  className="min-h-screen font-sans text-[#5a4a35] transition-all duration-700 bg-cover bg-center"
  style={{
    backgroundImage:
      currentPage === 0
        ? `url(${bg1})`
        : currentPage === 1
        ? `url(${bg2})`
        : currentPage === 2
        ? `url(${bg3})`
        : currentPage === 3
        ? `url(${bg4})`
        : currentPage === 4
        ? `url(${bg5})`
        : currentPage === 5
        ? `url(${bg6})`
        : `url(${bg7})`,
  }}
>

  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Playfair+Display:wght@400;700&family=Quicksand:wght@300;400;500;600;700&display=swap');
    
    body {
      color: #5a4a35;
      font-family: 'Quicksand', sans-serif;
    }
    
    .prose p {
      margin-bottom: 1.25em;
    }
    
    @media print {
      body * {
        visibility: hidden;
      }
      #newspaper-content, #newspaper-content * {
        visibility: visible;
      }
      #newspaper-content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
      }
    }
  `}</style>
  
  <AnimatePresence mode="wait">
    {currentPage === 0 && <LandingPage key="landing" />}
    {currentPage === 1 && <MenuPage key="menu" />}
    {currentPage === 2 && <MessagePage key="message" />}
    {currentPage === 3 && <LoveNotesPage key="notes" />}
    {currentPage === 4 && <NewspaperPage key="newspaper" />}
    {currentPage === 5 && <PlaylistPage key="playlist" />}
    {currentPage === 6 && <WishPage key="wish" />}
  </AnimatePresence>
</div>

  );
};

export default App;
