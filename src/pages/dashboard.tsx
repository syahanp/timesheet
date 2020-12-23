import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import protectRoute from 'auth/protectRoute';
import Header from 'containers/Dashboard/Header';
import CurrentTimesheet from 'containers/Dashboard/CurrentTimesheet';
import TimesheetTable from 'components/Table/TimesheetTable';
import { useAuth } from 'auth/AuthContext';

const Dashboard = ({animals}) => {

    console.log(animals);

    const { isLogin } = useAuth()

    return (
        <Div>
            <Head>
                <title>Timesheet - Aligar Syahan Putra</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <CurrentTimesheet />

            <br/>

            <TimesheetTable />
        </Div>
    )
}

export default protectRoute(Dashboard);

export async function getServerSideProps(context) {
    const animals = ['monkey', 'tiger', 'cat', 'dog']

    return {
        props: {animals}
    }
}

const Div = styled.div`

`