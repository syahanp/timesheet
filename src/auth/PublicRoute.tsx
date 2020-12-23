import React from 'react';
import { AuthContext, useAuth } from './AuthContext';
import { useRouter } from 'next/router';

const PublicRoute = (Component) => {

    return (props: any) => {
        const router = useRouter()
        const { isLogin } = useAuth()
        console.log(router);

        if (!isLogin) {
            return <Component {...props} />
        }

        if (typeof window === 'undefined') {
            console.log("GA JALAN");
        }

        // router.push('/dashboard')
        console.log(window.location);
        return null
    }
}

export default PublicRoute;
