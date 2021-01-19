import Header from './components/Header';
import Cards from './components/Cards';
import { useState, useEffect } from 'react';
import './App.scss';

function App() {
  const [scores, setScores] = useState([0, 0]);
  const [memory, setMemory] = useState([]);
  const [order, setOrder] = useState(createOrder());

  function createOrder() {
    return [...Array(3).keys()].sort(() => .5 - Math.random());
  }

  function updateScore(img) {
    if (memory.includes(img)) {
      setScores([0, scores[1]]);
      setMemory([]);
    } else {
      const newScore = scores[0] + 1;
      newScore > scores[1] ?
        setScores([newScore, newScore]) :
        setScores([newScore, scores[1]]);
      setMemory([...memory, img]);
    }
  }

  function handleClick(e) {
    updateScore(e.target.className);
    setOrder(createOrder());
  }

  useEffect(() => {
    const imgs = document.querySelectorAll('img');

    imgs.forEach((img) => {
      img.addEventListener('click', handleClick);
    })

    return() => {
      imgs.forEach((img) => {
        img.removeEventListener('click', handleClick);
      })
    }
  }, [handleClick]);

  return (
    <div className="App">
      <Header
        scores={scores} />
      <Cards 
        order={order} />
    </div>
  );
}

export default App;
