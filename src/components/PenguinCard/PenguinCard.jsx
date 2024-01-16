const PenguinCard = (props) => {
  return ( 
    <>
    <li>
      <section>
        <button>X</button>
      </section>
      <h2>Penguin Name:{props.penguin.name}</h2>
      <h2>Penguin Age and breed:{props.penguin.age} and {props.penguin.breed}</h2>
    </li>
    </>
  );
}
 
export default PenguinCard;