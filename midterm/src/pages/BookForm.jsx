import {Formik , Form as FormikForm, Field, ErrorMessage, } from 'formik';
import * as Yup from 'yup';
import React from 'react';

const validationSchema = Yup.object().shape({
    title: Yup.string().min(2, "Title must be at least 2 characters").required('Title is required'),
    author: Yup.string().required('Author is required'),
    genre: Yup.string().required('Genre is required'), 
    rating: Yup.number()
        .typeError('Rating must be a number')
        .min(0, 'Minimum 0')
        .max(5, 'Maximum 5')
        .required('Rating is required'),
});

const BookFormEx = ({ onSubmit }) => {
    const initialValues = {
        title: "",
        author: "",
        genre: "fiction", 
        rating: "",
    };

    const styleField = "bg-white w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    const errorFiled = "text-red-500 text-sm mt-1"

    return (
        <div className='mt-10 mx-auto max-w-lg border border-gray-300 p-8 rounded-lg bg-gray-100'>
            <h1 className='text-2xl font-semibold text-center text-gray-800 mb-6'>Add Book</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched, isSubmitting }) => (
                    <FormikForm>
                        <div className='mb-4'>
                            <label htmlFor="title">Title</label>
                            <Field name="title" type="text" className={styleField} placeholder="Title" />
                            <ErrorMessage name="title" component="div" className={errorFiled} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="author">Author</label>
                            <Field name="author" type="text" className={styleField} placeholder="Author" />
                            <ErrorMessage name="author" component="div" className={errorFiled} />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="genre">Genre</label>
                            <Field as="select" name="genre" className={styleField}>
                                <option value="fiction">Fiction</option>
                                <option value="nonfiction">Nonfiction</option>
                                <option value="tech">Tech</option>
                            </Field>
                            <ErrorMessage name="genre" component="div" className={errorFiled} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="rating">Rating (1-5)</label>
                            <Field name="rating" type="number" step="0.1" className={styleField} placeholder="Rating" />
                            <ErrorMessage name="rating" component="div" className={errorFiled} />
                        </div>
                        
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-green-700 hover:bg-green-900 text-white font-semibold py-3 px-4 rounded-md transition duration-200"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </FormikForm>
                )}
            </Formik>
        </div>
    );
};

export default BookFormEx;