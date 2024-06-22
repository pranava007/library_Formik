import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const Autcreate = () => {

  const navigate =useNavigate()



const initialValues = {
    author:'',
    author_dOB:'',
    author_biography:'',
}

const validation = Yup.object().shape(
    {
        author:Yup.string().required('Author name requires'),
        author_dOB:Yup.string().required('Author DOF requried'),
        author_biography:Yup.string().required('Author Bigraphy requried'),
    }

)

const handleSubmit = async (values)=>{
  await axios.post(`https://667036a10900b5f87249cf8f.mockapi.io/api/library`,values)
  .then((res)=>{console.log(res.data)})
  .catch((error)=>{console.log(error)})
  navigate('/author')

}




  return (
   <>
     <div className='col-md-12 mt-5 mb-5 container'>
      <h1>Add Author</h1>
      <br />
      <br />
   
        <Formik

        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={handleSubmit}
      
         
        >
          <Form className="row g-3">
          

            <div className='col-md-12'>
              <label htmlFor="author">Book Author Name:</label>
              <Field type='text' className="form-control mb-3" name='author' placeholder='Enter Book Author Name' />
              <ErrorMessage name='author' component='p' className='colorr' />
            </div>

            <div className='col-md-12'>
              <label htmlFor="author_dOB">Author_dOB:</label>
              <Field type='date' className="form-control mb-3" name='author_dOB' placeholder='Enter Book ISBN-number' />
              <ErrorMessage name='author_dOB' component='p' className='colorr' />
            </div>

            <div className='col-md-12'>
              <label htmlFor="publication_date">Book Publication Date:</label>
              <Field as='textarea' className="form-control mb-3" name='author_biography' />
              <ErrorMessage name='author_biography' component='p' className='colorr' />
            </div>

            <div className='col-md-12'>
              <button type='submit' className='btn btn-primary'>Update</button>
            </div>
          </Form>
        </Formik>
    
    </div>
   
   </>
  )
}

export default Autcreate