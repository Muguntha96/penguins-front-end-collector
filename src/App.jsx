// npm modules
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

// services
import * as penguinService from './services/penguinService'

//components
import Nav from './components/Nav/Nav'

// pages
import Landing from './pages/Landing/Landing'
import PenguinsList from './pages/PenguinsList/PenguinsList'
import NewPenguin from './pages/NewPenguin/NewPenguin'
//CSS
// import PenguinList from './PenguinsList/PenguinsList.css'
const App = () => {
  const  [penguins,setPenguins]=useState([])
  const navigate=useNavigate()
  useEffect(() =>{
    const fetchPenguin= async () =>{
      const data=await penguinService.index()
      setPenguins(data)
    }
    fetchPenguin()
    
  },[])

  const handleAddPenguin = async (formData)=>{
    const newPenguin= await penguinService.create(formData)
    setPenguins([newPenguin,...penguins])
    navigate('/penguins')
  }
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/penguins' element={<PenguinsList penguins={penguins} />} />
        <Route path='/penguins/new' element={<NewPenguin handleAddPenguin={handleAddPenguin} />} />
      </Routes>
    </>
    );
}

export default App;