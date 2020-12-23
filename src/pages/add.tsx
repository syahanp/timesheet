import React from 'react';
import Head from 'next/head';
import Header from 'containers/AddActivity/Header';
import ActivityForm from 'containers/AddActivity/ActivityForm';

const Add = () => {
    return (
        <div>
            <Head>
                <title>Add Today Activity</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Header />

            <br/>

            <ActivityForm />
        </div>
    )
}

export default Add
