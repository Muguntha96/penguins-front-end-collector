import { NavLink } from "react-router-dom"
// import penguins from '../assets/animations/penguins.jpg'

const Nav = () => {
  return (  
    <nav>
      <NavLink to='/'>
        <img src='{../assets/animations/penguins.jpg}' alt="A cute logo" />
      </NavLink>
      <NavLink to='/penguins'>Penguins List</NavLink>
      <NavLink to='/penguins/new'>Add New Penguin</NavLink>
    </nav>
  );
}

export default Nav;