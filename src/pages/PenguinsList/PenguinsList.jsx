import { Link } from "react-router-dom";
import './PenguinList.css'
const PenguinsList = (props) => {
  return ( 
    <>
    <h1>Penguins List</h1>
    {props.penguins.length<0 && <h2>Ohh No,There is no penguins</h2>}
    <ul>
      {props.penguins.map((penguin) =>(
        <li key={penguin._id}>
          <Link to={`/penguins/${penguin._id }`}>
            <h2>{penguin.name}</h2>
          </Link>
        </li>
      ))}
    </ul>
    </>
   )
}
 
export default PenguinsList;