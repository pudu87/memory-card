import chinchilla from '../img/chinchilla.jpeg';
import colocolo from '../img/colocolo.jpeg';
import guanaco from '../img/guanaco.jpeg';
import huemul from '../img/huemul.jpeg';
import huillin from '../img/huillin.jpeg';
import huina from '../img/huina.jpeg';
import monitoDelMonte from '../img/monito-del-monte.jpeg';
import pudu from '../img/pudu.jpeg';
import puma from '../img/puma.jpeg';
import vicuna from '../img/vicuna.jpeg';
import vizcacha from '../img/vizcacha.jpeg';
import zorroChilla from '../img/zorro-chilla.jpeg';

function Cards(props) {

  const images = [
    { src: chinchilla, title: 'Chínchilla' },
    { src: colocolo, title: 'Colocolo' },
    { src: guanaco, title: 'Guanaco' },
    { src: huemul, title: 'Huemul' },
    { src: huillin, title: 'Huillín' },
    { src: huina, title: 'Huiña' },
    { src: monitoDelMonte, title: 'Monito Del Monte' },
    { src: pudu, title: 'Pudu' },
    { src: puma, title: 'Puma' },
    { src: vicuna, title: 'Vicuña' },
    { src: vizcacha, title: 'Vízcacha' },
    { src: zorroChilla, title: 'Zorro Chilla' }
  ]

  const listItems = props.order.map((index) => {
    return (
      <li 
        key={index.toString()}
        className={`card _${index.toString()}`}>
        <div 
          style={ { backgroundImage: `url(${images[index].src})` } } >
        </div>
        <p>{images[index].title}</p> 
      </li>
    )
  })

  return (
    <ul 
      className='cards'>
      {listItems}
    </ul>
  )
}

export default Cards;
