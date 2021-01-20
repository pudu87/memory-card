function Header(props) {
  const [score, top] = [...props.scores];

  return (
    <header>
      <h1>Memory Cards</h1>
      <p>Increase your score by clicking each animal only once.</p>
      <ul className='scores'>
        <li className='score'>Score <span>{score}</span></li>
        <li className='top'>Top <span>{top}</span></li>
      </ul>
    </header>
  )
}

export default Header;