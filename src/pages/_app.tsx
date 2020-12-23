import React from 'react';
import { AppProps } from 'next/app';
import 'scss/global.scss';
import 'react-calendar/dist/Calendar.css';
import "bootstrap/dist/css/bootstrap.css";

import Router from 'next/router';
import NProgress from 'nprogress'
import ThemeProvider from 'theme/ThemeProvider';
import AppLayout from 'containers/AppLayout';
import AuthProvider from 'auth/AuthContext';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {

    Router.events.on('routeChangeStart', (url) => {
        NProgress.start()
        NProgress.set(0.3);
    })  

    Router.events.on('routeChangeComplete', () => NProgress.done())

    return (
        <ThemeProvider>
            <AuthProvider>
                <AppLayout component={Component} pageProps={pageProps} />
            </AuthProvider>
        </ThemeProvider>
    )
}

export default App;