// import { Link } from "react-router-dom";

import PenguinCard from '../../components/PenguinCard/PenguinCard';
import './PenguinList.css'
const PenguinsList = (props) => {
  return ( 
    <>
    <h1>Penguins List</h1>
    {props.penguins.length<0 && <h2>Ohh No,There is no penguins</h2>}
      {props.penguins.map((penguin) =>(
        <PenguinCard penguin={penguin} key={penguin._id}/>
        
      ))}

    </>
  )
}

export default PenguinsList;