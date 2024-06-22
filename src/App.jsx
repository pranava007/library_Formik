import { Route,Routes } from 'react-router-dom'
import './App.css'
import Book from './pages/Book'
import Author from './pages/Author'
import Create from './pages/Autcreate'
import Edit from './pages/Edit'
import { useState } from 'react'
import Navbarr from './components/Navbarr'
import Footerr from './components/Footerr'
import EditeAuthor from './pages/EditeAuthor'
import Autcreate from './pages/Autcreate'
import Bookcreate from './pages/Bookcreate'


function App() {
  
  const [idbook,setidbook]=useState(0)
  const [idauthor,setidauthor] = useState(0)

  return (
    <>
   <>
   <Navbarr/>
   </>
    <Routes>

      <Route path='/' element={<Book setidbook={setidbook} />} />
      <Route path='/author' element={<Author setidauthor={setidauthor}/>}/>
      <Route path='/autcreate' element={<Autcreate />} />
      <Route path='/bookcreate' element={<Bookcreate />} />
      <Route path='/edit/:id' element={<Edit idbook={idbook} />}/>
      <Route path='/editauthor/:id' element={<EditeAuthor idauthor={idauthor} />}/>



   </Routes>
     
     <>
     <Footerr />
     </>

    </>
  )
}

export default App
