import pudu from '../img/pudu.jpeg'
import puma from '../img/puma.jpeg';
import vicuna from '../img/vicuna.jpeg';

function Cards(props) {
  const images = [pudu, puma, vicuna];
  
  const listItems = props.order.map((index) => {
    return (
      <li key={index.toString()}> 
        <img src={images[index]} className={index.toString()} /> 
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
