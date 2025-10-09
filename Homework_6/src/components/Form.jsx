import {Formik , Form as FormikForm, Field} from 'formik';
import * as Yup from 'yup';

const FormEx = () => {
    const initialValues = {
            fullname: '',
            email: '',
            phone: '',
            password: '',
            course: '',
            date: '',
            gender: '',
            education: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            country: '',
        };

        const onSubmit = (values, {setSubmitting }) => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false)
        };

        const validationSchema = Yup.object().shape({
            fullname: Yup.string().required('Full name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
            course: Yup.string().required('Please select a course'),
            gender: Yup.string().required('Please select gender'),
            date: Yup.date().required('Date of birth is required'),
            city: Yup.string().required('City is required'),
            country: Yup.string().required('Country is required'),
            zipcode: Yup.string().matches(/^\d*$/, 'Zip code must contain only numbers').notRequired(),
            phone: Yup.string().matches(/^[+\d\s()\-]*$/, 'Phone number contains invalid characters').notRequired(),
        });

        const styleField = "bg-white w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        
        const errorFiled = "text-red-500 text-sm mt-1"

    return (
        <div className='mt-10 mx-auto max-w-lg border border-gray-300 p-8 rounded-lg bg-gray-100'>
            <h1 className='text-2xl font-semibold text-center text-gray-800 mb-6'>Course Application</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                validateOnBlur={false}
                validateOnChange={false}
            >
                {({ errors, touched }) => (
                    <FormikForm>
                        <div className='mb-4'>
                            <Field name="fullname" type="text" className={styleField} placeholder="Full name" />
                            {errors.fullname && touched.fullname && (
                                <div className={errorFiled}>{errors.fullname}</div>
                            )}
                        </div>
                        <div className="mb-4 flex gap-4">
                            <div className="flex-1">
                                <Field name="email" type="email" className={styleField} placeholder="Email" />
                                {errors.email && touched.email && (
                                    <div className={errorFiled}>{errors.email}</div>
                                )}
                            </div>
                            <div className="flex-1">
                                <Field name="phone" type="tel" className={styleField} placeholder="Phone" />
                            </div>
                        </div>
                        <div className='mb-4'>
                            <Field name="password" type="password" className={styleField} placeholder="Password" />
                            {errors.password && touched.password && (
                                <div className={errorFiled}>{errors.password}</div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2 font-medium">Which course are you applying for?</label>
                            {['Course A', 'Course B', 'Course C'].map(c => (
                                <label className='flex items-center mb-2' key={c}>
                                    <Field name="course" type="radio" value={c} className="mr-2" />
                                    <span>{c}</span>
                                </label>
                            ))}
                            {errors.course && touched.course && (
                                <div className={errorFiled}>{errors.course}</div>
                            )}
                        </div>
                        <div className="mb-4 flex gap-4 items-start">
                            <div className="flex-1">
                                <label className="block text-gray-700 mb-2 font-medium">Date of birth</label>
                                <Field name="date" type="date" className={styleField} />
                                {errors.date && touched.date && (
                                    <div className={errorFiled}>{errors.date}</div>
                                )}
                            </div>
                            <div className="flex-1">
                                <div className="flex gap-6 mt-8">
                                    {['MALE', 'FEMALE'].map(g => (
                                        <label className='flex items-center' key={g}>
                                            <Field name="gender" type="radio" value={g} className="mr-2" />
                                            <span className="text-gray-700">{g}</span>
                                        </label>
                                    ))}
                                </div>
                                {errors.gender && touched.gender && (
                                    <div className={errorFiled}>{errors.gender}</div>
                                )}
                            </div>
                        </div>
                        <div className="mb-4">
                            <Field name="education" as="select" className={styleField}>
                                <option value="">Select Education</option>
                                <option value="School">School</option>
                                <option value="College">College</option>
                                <option value="University">University</option>
                            </Field>
                        </div>
                        <div className="mb-4">
                            <Field name="address" as="textarea" rows="3" placeholder="Address" className={styleField} />
                        </div>
                        <div className="mb-4 flex gap-4">
                            <div className="flex-1">
                                <Field name="city" type="text" className={styleField} placeholder="City" />
                                {errors.city && touched.city && (
                                    <div className={errorFiled}>{errors.city}</div>
                                )}
                            </div>
                            <div className="flex-1">
                                <Field name="state" type="text" className={styleField} placeholder="State" />
                            </div>
                        </div>
                        <div className="mb-4 flex gap-4">
                            <div className="flex-1">
                                <Field name="zipcode" type="text" className={styleField} placeholder="Zip Code" />
                                {errors.zipcode && touched.zipcode && (
                                    <div className={errorFiled}>{errors.zipcode}</div>
                                )}
                            </div>
                            <div className="flex-1">
                                <Field name="country" as="select" className={styleField} >
                                    {[
                                        { val: '', label: 'Select Country' },
                                        { val: 'UK', label: 'UK' },
                                        { val: 'USA', label: 'USA' },
                                        { val: 'KZ', label: 'KZ' }
                                    ].map(q => (
                                        <option key={q.val || 'empty'} value={q.val}>{q.label}</option>
                                    ))}
                                </Field>
                                {errors.country && touched.country && (
                                    <div className={errorFiled}>{errors.country}</div>
                                )}
                            </div>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-green-700 hover:bg-green-900 text-white font-semibold py-3 px-4 rounded-md transition duration-200"
                        >
                            Submit
                        </button>
                    </FormikForm>
                )}
            </Formik>
        </div>
    );
};

export default FormEx;