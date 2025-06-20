import React, { useState, useMemo, useEffect } from 'react';
import Confetti from 'react-confetti';
import { Sparkles, Star, Palette, Home, CheckCircle, XCircle, ArrowRight, Volume2, VolumeX, Clock, Mic } from 'lucide-react';
import { quizData, getQuizQuestions } from './quizData';
import { coloringPages } from './coloringPages';
import useSound from 'use-sound';

// Local sound file imports
import correctSound from './sounds/correct.mp3';
import wrongSound from './sounds/wrong.mp3';
import winSound from './sounds/win.mp3';
import backgroundMusic from './sounds/music.mp3';

// App Constants
const categories = Object.keys(quizData);
const REWARD_THRESHOLD = 5;
const QUESTIONS_PER_QUIZ = 5;
const QUIZ_DURATION_SECONDS = 90; // You can easily change this value (in seconds)

// Helper function for Text-to-Speech
const speak = (text) => {
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
};

// Background Music Component
function BackgroundMusic() {
    const [play, { stop }] = useSound(backgroundMusic, { loop: true, volume: 0.3 });
    const [isMusicOn, setIsMusicOn] = useState(false);

    const toggleMusic = () => {
        if (isMusicOn) { stop(); } else { play(); }
        setIsMusicOn(!isMusicOn);
    };

    return (
        <button 
            onClick={toggleMusic} 
            className="fixed bottom-4 right-4 bg-white p-3 rounded-full shadow-lg border-2 border-amber-200 z-50"
            aria-label={isMusicOn ? "Mute music" : "Play music"}
        >
            {isMusicOn ? <Volume2 className="w-6 h-6 text-amber-600 animate-pulse" /> : <VolumeX className="w-6 h-6 text-amber-600" />}
        </button>
    );
}

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState('menu');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [correctAnswersTotal, setCorrectAnswersTotal] = useState(0); 
  const [coloringPageData, setColoringPageData] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage('quiz');
  };
  
  const handleQuizComplete = (correctCountInSession) => {
    const newTotal = correctAnswersTotal + correctCountInSession;

    if (newTotal >= REWARD_THRESHOLD) {
      const randomIndex = Math.floor(Math.random() * coloringPages.length);
      setColoringPageData(coloringPages[randomIndex]);
      setCurrentPage('coloring');
      setCorrectAnswersTotal(0); 
    } else {
      setCorrectAnswersTotal(newTotal);
      setCurrentPage('menu');
    }
  };

  const navigateHome = () => {
    setCurrentPage('menu');
    setSelectedCategory(null);
  };

  const PageToRender = () => {
    switch (currentPage) {
      case 'quiz':
        return <Quiz category={selectedCategory} onQuizComplete={handleQuizComplete} onExit={navigateHome} />;
      case 'coloring':
        if (coloringPageData) {
          const PageComponent = coloringPageData.component;
          return <ColoringPage onExit={navigateHome} PageSVG={PageComponent} initialFills={coloringPageData.initialFills} />;
        }
        return <MainMenu onSelectCategory={handleSelectCategory} correctAnswersCount={correctAnswersTotal} />;
      default:
        return <MainMenu onSelectCategory={handleSelectCategory} correctAnswersCount={correctAnswersTotal} />;
    }
  };

  return (
    <div className="antialiased text-slate-800 bg-amber-100 min-h-screen flex items-center justify-center p-2 sm:p-4 font-sans">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border-4 border-amber-200">
        <PageToRender />
      </div>
      <BackgroundMusic /> 
    </div>
  );
}

// Menu Component
function MainMenu({ onSelectCategory, correctAnswersCount }) {
  return (
    <div className="text-center animate-fade-in">
      <div className="flex justify-center items-center mb-4">
        <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-amber-500" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold ml-4 text-amber-900">Fun Learning Games!</h1>
      </div>
      <p className="text-slate-600 mb-6 text-base sm:text-lg">Collect stars to win a coloring surprise!</p>
      
      {correctAnswersCount > 0 && (
          <div className="mb-6 p-4 bg-yellow-100 border-2 border-dashed border-yellow-400 rounded-lg max-w-md mx-auto animate-fade-in">
              <p className="font-semibold text-xl text-yellow-800">Your Progress</p>
              <div className="flex justify-center items-center mt-2">
                  {[...Array(REWARD_THRESHOLD)].map((_, i) => (
                      <Star key={i} className={`w-8 h-8 transition-colors ${i < correctAnswersCount ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} />
                  ))}
              </div>
              <p className="text-sm text-slate-500 mt-2">You have {correctAnswersCount} of {REWARD_THRESHOLD} stars. Keep going!</p>
          </div>
      )}

      <div className="mb-8 p-4 bg-amber-50 border-2 border-dashed border-amber-300 rounded-lg max-w-md mx-auto">
        <p className="font-semibold text-lg sm:text-xl text-amber-800">Your Goal</p>
        <p className="text-sm sm:text-base text-slate-500 mt-1">Collect <strong>{REWARD_THRESHOLD} stars</strong> to unlock a coloring surprise!</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className="p-3 sm:p-4 h-24 sm:h-28 flex items-center justify-center bg-teal-500 text-white rounded-xl shadow-md hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-300 transition-transform transform hover:scale-105"
          >
            <span className="font-bold text-base sm:text-lg text-center">{category}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// Quiz Component
function Quiz({ category, onQuizComplete, onExit }) {
  const questions = useMemo(() => getQuizQuestions(category, QUESTIONS_PER_QUIZ), [category]);

  const [playCorrectSound] = useSound(correctSound, { volume: 0.5 });
  const [playWrongSound] = useSound(wrongSound, { volume: 0.5 });
  const [playWinSound] = useSound(winSound, { volume: 0.6 });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [feedback, setFeedback] = useState(null);
  const [correctInSession, setCorrectInSession] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUIZ_DURATION_SECONDS);

  useEffect(() => {
    if (timeLeft === 0 || feedback) return;
    const intervalId = setInterval(() => setTimeLeft(prevTime => prevTime - 1), 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft, feedback]); 

  useEffect(() => {
    if (timeLeft === 0) {
      onQuizComplete(correctInSession);
    }
  }, [timeLeft, onQuizComplete, correctInSession]);

  const handleAnswer = (option) => {
    if (feedback) return;
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = option === currentQuestion.answer;
    setUserAnswers({ ...userAnswers, [currentQuestionIndex]: option });
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    if (isCorrect) {
      playCorrectSound();
      setCorrectInSession(prev => prev + 1);
    } else {
      playWrongSound();
    }
  };

  const handleNextQuestion = () => {
    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    if (isLastQuestion) {
      if (correctInSession === QUESTIONS_PER_QUIZ) {
        playWinSound();
        setShowConfetti(true);
        setTimeout(() => onQuizComplete(correctInSession), 4000);
      } else {
        onQuizComplete(correctInSession);
      }
    } else {
      setFeedback(null);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timerColor = timeLeft <= 15 ? 'text-red-500 animate-pulse' : 'text-slate-600';

  if (!questions || questions.length === 0) {
    return <div className="text-center p-10">Loading questions for {category}...</div>;
  }
  
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="relative">
      {showConfetti && <Confetti recycle={false} numberOfPieces={400} />}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800">{category} Game</h2>
        <button onClick={onExit} className="p-2 rounded-full hover:bg-amber-100 transition">
          <Home className="w-6 h-6 text-amber-600"/>
        </button>
      </div>

      <div className="flex items-center justify-between bg-slate-100 p-4 rounded-lg mb-4">
        <div className={`flex items-center font-bold text-lg ${timerColor}`}>
            <Clock className="mr-2 w-6 h-6"/>
            <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
        </div>
        <div className="flex space-x-1">
          {[...Array(QUESTIONS_PER_QUIZ)].map((_, i) => (
            <Star key={i} className={`w-5 h-5 md:w-6 md:h-6 transition-colors ${i < correctInSession ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} />
          ))}
        </div>
      </div>
       
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg md:text-2xl font-semibold text-slate-800">{currentQuestion.question}</p>
        <button onClick={() => speak(currentQuestion.question)} className="p-2 rounded-full hover:bg-sky-100 transition">
            <Mic className="w-6 h-6 text-sky-500"/>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {currentQuestion.options.map((option) => {
          const isCorrectAnswer = option === currentQuestion.answer;
          const isSelectedAnswer = userAnswers[currentQuestionIndex] === option;
          let buttonClass = 'bg-white hover:bg-amber-100 border-2 border-amber-200';
          
          if (feedback) {
            if (isCorrectAnswer) buttonClass = 'bg-green-500 text-white scale-105 ring-4 ring-green-200';
            else if (isSelectedAnswer) buttonClass = 'bg-red-500 text-white';
            else buttonClass = 'bg-white opacity-50';
          }
          
          return (
            <button key={option} onClick={() => handleAnswer(option)} disabled={!!feedback}
              className={`p-4 text-lg font-semibold rounded-lg shadow transition-all duration-300 disabled:cursor-not-allowed ${buttonClass}`}>
              {option}
            </button>
          );
        })}
      </div>

      {feedback && (
        <div className="mt-6 text-center animate-fade-in">
          {feedback === 'correct' ?
            <p className="text-2xl font-bold text-green-600 flex items-center justify-center"><CheckCircle className="mr-2"/> Hooray! You're right!</p> :
            <p className="text-2xl font-bold text-red-600 flex items-center justify-center"><XCircle className="mr-2"/> Oops! The answer is {currentQuestion.answer}</p>
          }
          
          <div className="mt-4 p-4 bg-sky-100 border-l-4 border-sky-500 text-sky-800 rounded-lg text-left max-w-2xl mx-auto">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold">Here's a fun fact:</p>
                <p className="mt-1">{currentQuestion.explanation}</p>
              </div>
              <button onClick={() => speak(currentQuestion.explanation)} className="p-2 ml-2 rounded-full hover:bg-sky-200 transition flex-shrink-0">
                  <Mic className="w-5 h-5 text-sky-600"/>
              </button>
            </div>
          </div>

          <button
            onClick={handleNextQuestion}
            className="mt-6 bg-amber-500 text-white font-bold py-3 px-10 rounded-lg shadow-md hover:bg-amber-600 transition-all transform hover:scale-105 flex items-center justify-center mx-auto"
          >
            {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}

// Coloring Page Component
function ColoringPage({ onExit, PageSVG, initialFills }) {
  const colors = [
    // Rainbow Colors (ROYGBIV)
    '#8F00FF', // Violet
    '#4B0082', // Indigo
    '#0000FF', // Blue
    '#80FF7D', // Green
    '#FFF60A', // Yellow
    '#FF9052', // Orange
    '#FF0000', // Red

    // Pinks & Purples
    '#FFC0CB', // Pink
    '#800080', // Purple

    // Blues & Cyans
    '#00C2F9', // Sky Blue
    '#009BD6', // Turquoise
    '#00FFFF', // Cyan
    '#CCCCFF', // Periwinkle

    // Greens
    '#00A209', // Dark Green
    '#768400', // Olive Green
    
    // Neutrals & Browns
    '#A52A2A', // Brown
    '#FFD0A2', // Beige
    '#808080', // Grey
    '#FFFFFF', // White
    '#000000', // Black
  ];
  const [selectedColor, setSelectedColor] = useState('#5AC8FA');
  const [fills, setFills] = useState(initialFills);

  const handlePathClick = (pathId) => {
    setFills(prevFills => ({ ...prevFills, [pathId]: selectedColor }));
  };

  return (
    <div className="text-center">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Palette className="w-8 h-8 text-pink-500" />
          <h1 className="text-2xl md:text-3xl font-bold ml-3 text-pink-800">Coloring Surprise!</h1>
        </div>
        <button onClick={onExit} className="p-2 rounded-full hover:bg-pink-100 transition">
          <Home className="w-6 h-6 text-pink-600"/>
        </button>
      </div>
      <p className="text-slate-600 mb-4">You did it! Pick a color, then tap the picture to paint.</p>
      
      <div className="flex justify-center flex-wrap items-center gap-2 mb-4 p-3 bg-slate-100 rounded-lg">
        {colors.map(color => (
          <button key={color} onClick={() => setSelectedColor(color)}
            className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 transition-transform ${selectedColor === color ? 'border-blue-500 scale-110 ring-2 ring-offset-2 ring-blue-500' : 'border-slate-300'}`}
            style={{ backgroundColor: color }} aria-label={`Select color ${color}`}
          />
        ))}
      </div>
      <div className="w-full max-w-2xl mx-auto aspect-[4/3] bg-white p-2 rounded-xl border-2 border-slate-200 shadow-inner cursor-pointer">
        <PageSVG f={fills} o={handlePathClick} />
      </div>
       <div className="mt-6 flex justify-center items-center gap-4">
            <button onClick={() => setFills(initialFills)} className="bg-slate-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-slate-700 transition-colors">
                Reset Painting
            </button>
            <button 
                onClick={onExit} 
                className="bg-teal-500 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-teal-600 transition-all transform hover:scale-105 flex items-center"
            >
                Start a New Challenge!
                <Sparkles className="ml-2 w-5 h-5" />
            </button>
       </div>
    </div>
  );
}
