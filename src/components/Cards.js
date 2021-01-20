import pudu from '../img/pudu.jpeg';
import puma from '../img/puma.jpeg';
import vicuna from '../img/vicuna.jpeg';

function Cards(props) {

  const images = [
    { src: pudu, title: 'Pudu' },
    { src: puma, title: 'Puma' },
    { src: vicuna, title: 'Vicuña' }
  ]

  const listItems = props.order.map((index) => {
    return (
      <li 
        key={index.toString()}
        className={`card ${index.toString()}`}>
        <div 
          style={ { backgroundImage: `url(${images[index].src})` } } >
        </div>
        <p>{images[index].title}</p> 
      </li>
    )
  })

  return (
    <ul>
      {listItems}
    </ul>
  )
}

export default Cards;
