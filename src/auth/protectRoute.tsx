import React from 'react';
// import Router from 'next/router';
import { useAuth } from './AuthContext';

const protectRoute = (Component: any) => {
    
    return (props: any, ctx) => {
        const { isLogin } = useAuth()
        console.log(ctx);

        if (isLogin) {
            return <Component {...props} />
        }

        if (typeof window === 'undefined') {
            console.log("GA JALAN");
        }

        // Router.replace('/')
        return null
    }

    
}

export default protectRoute
