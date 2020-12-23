import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import Button from 'components/Button';
import Field from 'components/Form/Field';
import Attachment from 'components/Form/Attachment';
import Timepicker from 'components/Form/Timepicker';

const ActivityForm: React.FC = () => {
    
    const formik = useFormik({
        validationSchema: yup.object({
            title: yup.string()
                .required('Required'),
            description: yup.string()
            //   .max(20, 'Must be 20 characters or less')
                .required('Required'),
            start: yup.string().required('Required'),
            end: yup.string().required('Required'),
        }),
        initialValues: {
            title: '',
            description: '',
            start: '',
            end: '',
            attachment: []
        },
        onSubmit: val => {
            console.log(val);
        }
    })

    const { 
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue
    } = formik

    useEffect(() => {
        console.log(values.attachment);
    }, [values.attachment])
    
    return (
        <Form>
            <div className="row mb-4">
                <label htmlFor='title' className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-6">
                    <Field 
                        variant='textbox'
                        name='title'
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor='description' className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-6">
                    <Field 
                        variant='textarea'
                        name='title'
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
            </div>
            
            <br/><hr/><br/>

            <div className="row mb-4">
                <label htmlFor='start' className="col-sm-2 col-form-label">Start at</label>
                <div className="col-sm-6">
                    <Timepicker 
                        name='start'
                        value={values.start}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor='start' className="col-sm-2 col-form-label">End at</label>
                <div className="col-sm-6">
                    <Timepicker 
                        name='end'
                        value={values.end}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
            </div>

            <br/><hr/><br/>

            <div className="row mb-4">
                <label htmlFor='attachment' className="col-sm-2 col-form-label">Attachment</label>
                <div className="col-sm-6">
                    <Attachment
                        name='attachment'
                        value={values.attachment}
                        onChange={setFieldValue}
                        multiple
                    />
                </div>
            </div>

            <br/><br/>

            <Button variant='solid' size='large' color='primary' onClick={handleSubmit}>
                Submit Activity
            </Button>

        </Form>
    )
}

export default ActivityForm;

const Form = styled.form`

`
