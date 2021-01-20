import Header from './components/Header';
import Cards from './components/Cards';
import { useState, useEffect } from 'react';
import './App.scss';

function App() {
  const [scores, setScores] = useState([0, 0]);
  const [memory, setMemory] = useState([]);
  const [order, setOrder] = useState(createOrder());

  function createOrder() {
    return [...Array(12).keys()].sort(() => .5 - Math.random());
  }

  function updateScore(card) {
    if (memory.includes(card)) {
      setScores([0, scores[1]]);
      setMemory([]);
    } else {
      const newScore = scores[0] + 1;
      newScore > scores[1] ?
        setScores([newScore, newScore]) :
        setScores([newScore, scores[1]]);
      setMemory([...memory, card]);
    }
  }

  function handleClick(e) {
    const cardIndex = e.target.closest('li').className.split(' _')[1];
    updateScore(cardIndex);
    setOrder(createOrder());
  }

  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
      card.addEventListener('click', handleClick);
    })

    return() => {
      cards.forEach((card) => {
        card.removeEventListener('click', handleClick);
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
