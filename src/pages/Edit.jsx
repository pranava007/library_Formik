import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const Edit = ({ idbook }) => {
  const [bdata, setBdata] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    Dataget()
  }, [])

  const initialValues = {
    title: '',
    author: '',
    ISBN_number: '',
    publication_date: '', 
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Book title required'),
    author: Yup.string().required('Author name required'),
    ISBN_number: Yup.string().required('ISBN number required'),
    publication_date: Yup.string().required('Publication date required'),
  })

  const Dataget = async () => {
    axios.get(`https://667036a10900b5f87249cf8f.mockapi.io/api/library/${idbook}`)
      .then((res) => setBdata(res.data))
      .catch((error) => console.log(error))
  }

  const handleSubmit = async (values) => {
    axios.put(`https://667036a10900b5f87249cf8f.mockapi.io/api/library/${idbook}`, values)
      .then((res) => {
        console.log(res.data)
        navigate('/')
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className='col-md-12 mt-5 mb-5 container'>
      <h1>Update Book</h1>
      <br />
      <br />
   
        <Formik
          initialValues={bdata}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          <Form className="row g-3">
            <div className='col-md-12'>
              <label htmlFor="title">Book Title:</label>
              <Field type='text' className="form-control mb-3" name='title' placeholder='Enter Book Title' />
              <ErrorMessage name='title' component='p' className='colorr' />
            </div>

            <div className='col-md-12'>
              <label htmlFor="author">Book Author Name:</label>
              <Field type='text' className="form-control mb-3" name='author' placeholder='Enter Book Author Name' />
              <ErrorMessage name='author' component='p' className='colorr' />
            </div>

            <div className='col-md-12'>
              <label htmlFor="ISBN_number">Book ISBN-number:</label>
              <Field type='text' className="form-control mb-3" name='ISBN_number' placeholder='Enter Book ISBN-number' />
              <ErrorMessage name='ISBN_number' component='p' className='colorr' />
            </div>

            <div className='col-md-12'>
              <label htmlFor="publication_date">Book Publication Date:</label>
              <Field type='date' className="form-control mb-3" name='publication_date' />
              <ErrorMessage name='publication_date' component='p' className='colorr' />
            </div>

            <div className='col-md-12'>
              <button type='submit' className='btn btn-primary'>Update</button>
            </div>
          </Form>
        </Formik>
    
    </div>
  )
}

export default Edit
