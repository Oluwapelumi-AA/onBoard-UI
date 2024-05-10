import React, {useState} from 'react';
import Board from './components/Board';
import Home from './components/Home';

const App = () => {
  const [showBoard, setShowBoard] = useState(true);

  const handleBoardFinish = () => {
    setShowBoard(false);
  };

  return (
    <>
      {showBoard && <Board handleDone={handleBoardFinish} />}
      {!showBoard && <Home />}
    </>
  );
};

export default App;