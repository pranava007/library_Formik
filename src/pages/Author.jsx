import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Author = ({setidauthor}) => {

  
  const [authorData,setauthorData] = useState([])
  const [deleteData ,setDeleteData] = useState()
  const navigate = useNavigate()

  useEffect(()=>{
    authorfetchData()
  },[deleteData])

  const authorfetchData = async() =>{
    await axios.get('https://667036a10900b5f87249cf8f.mockapi.io/api/library')
    .then((res)=>setauthorData(res.data))
    .catch((error)=>{console.log(error)})
  }

  const geteditid =(id)=>{  
    setidauthor(id)

    navigate(`/editauthor/${id}`)
  }

  const delData = async(id)=>{
    await axios.delete(`https://667036a10900b5f87249cf8f.mockapi.io/api/library/${id}`)
    .then((res)=>setDeleteData(res.data))
    .catch((error)=>{console.log(error)})
  }



  return (
    <>

 <div className='container' >
  {authorData.map((element,index)=>{
    return(
      <div className="col-md-12" key={index}>
      <div className="box m-3">
        <table className='table'>
          <tbody>
            <tr>
              <td> <h5><strong>#</strong>{element.id}</h5></td>
            </tr>
           
            <tr>
              <td>  <h5><strong>Author Name </strong></h5></td>
              <td><h5> : {element.author}</h5></td>
            </tr>

            <tr>
              <td>  <h5><strong>Data of Brith</strong></h5></td>
              <td><h5> : {element.author_dOB}</h5></td>
            </tr>

            <tr>
              <td>  <h5><strong>Biography</strong></h5></td>
              <td><h5> : {element.author_biography}</h5></td>
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

export default Author