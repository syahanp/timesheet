import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import LoginForm from 'containers/Login/LoginForm';
import PublicRoute from 'auth/PublicRoute';

// note : ga ada landing page jadi halaman awalnya adalah login page

const Home: React.FC = () => {
    return (
        <Div>
            <Head>
                <title>Login | FH UI Timesheet</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

           <LoginForm />
        
        </Div>
    )
}

export default Home;

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`