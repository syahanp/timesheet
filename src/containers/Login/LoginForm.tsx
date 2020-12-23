import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import Field from 'components/Form/Field';
import Button from 'components/Button';

const LoginForm: React.FC = () => {

    const formik = useFormik({
        validationSchema: yup.object({
            email: yup.string().email('not a corrent email').required('Required'),
            password: yup.string().required('Required')
        }),
        initialValues: {
            email: '',
            password: ''
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
    
    return (
        <Div>
            <div className="mb-4">
                <label htmlFor="email" className="form-label">Email</label>
                <Field 
                    variant='textbox'
                    name='email'
                    value={values.email}
                    type='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <Field 
                    variant='textbox'
                    name='password'
                    value={values.password}
                    type='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>

            <br/>
            
            <div className="mb-3">
                <Button variant='solid' color='primary' size='large' fullWidth>
                    Login
                </Button>
            </div>
            <Button variant='outline' color='neutral' size='large' fullWidth>
                Login Dengan SSO
            </Button>
        </Div>
    )
}

export default LoginForm;

const Div = styled.div`
    padding: 3rem 2.5rem;
    background-color: ${({theme}) => theme.pallete.paper.depth1};
    border-radius: 5px;
    width: 450px;
`
