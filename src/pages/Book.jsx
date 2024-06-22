import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Book = ({setidbook}) => {

  const [bookData,setbookData] = useState([])
  const [deleteData ,setDeleteData] = useState()
  const navigate = useNavigate()

  useEffect(()=>{
   BookfetchData()
  },[deleteData])

  const BookfetchData = async() =>{
    await axios.get('https://667036a10900b5f87249cf8f.mockapi.io/api/library')
    .then((res)=>setbookData(res.data))
    .catch((error)=>{console.log(error)})
  }

  const geteditid =(id)=>{  
    setidbook(id)
    navigate(`/edit/${id}`)
  }

  const delData = async(id)=>{
    await axios.delete(`https://667036a10900b5f87249cf8f.mockapi.io/api/library/${id}`)
    .then((res)=>setDeleteData(res.data))
    .catch((error)=>{console.log(error)})
  }

  return (
    <>

 <div className='container' >
  {bookData.map((element,index)=>{
    return(
      <div className="col-md-12" key={index}>
      <div className="box m-3">
        <table className='table'>
          <tbody>
            <tr>
              <td> <h5><strong>#</strong>{element.id}</h5></td>
            </tr>
            <tr>
              <td>  <h5><strong>Title </strong></h5></td>
              <td><h5> : {element.title}</h5></td>
            </tr>
            <tr>
              <td>  <h5><strong>Author  </strong></h5></td>
              <td><h5> : {element.author}</h5></td>
            </tr>

            <tr>
              <td>  <h5><strong>ISNB-Number </strong></h5></td>
              <td><h5> : {element.ISBN_number}</h5></td>
            </tr>

            <tr>
              <td>  <h5><strong>Publication-Data   </strong></h5></td>
              <td><h5> : {element.publication_data}</h5></td>
            </tr>

         
            <tr>
              <td>
                <button className='btn btn-success m-2' onClick={()=>{geteditid(element.id)}} >Edit</button>
                <button className='btn btn-danger' onClick={()=>{delData(element.id)}} >Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
  
    )

  })}


 </div>
    
    
    
    
    </>
    
  )
}

export default Book