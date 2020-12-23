import React from 'react'
import styled from 'styled-components'
import { useAuth } from 'auth/AuthContext'
import Sidebar from 'components/Sidebar'
import Topbar from 'components/Topbar'

const AppLayout = ({ component: Component, pageProps }) => {
    const { isLogin } = useAuth();

    if (isLogin) {
        return (
            <Layout> 
                <div className="topbar_section">
                    <Topbar />
                </div>
                
                <Content>
                    <div className="content_sidebar">
                        <Sidebar />
                    </div>

                    <div className="container-fluid content_body">
                        <Component {...pageProps} />
                    </div>
                </Content>
            </Layout> 
        )
    }

    return <Component {...pageProps} />
}

export default AppLayout;

const Layout = styled.div`
    display: flex;
    flex-flow: column;
    height: 100vh;

    .topbar_section {
        flex: 0 1 auto;
    }
`

const Content = styled.div`
    flex: 1 1 auto;
    display: grid;
    grid-template-columns: 265px 1fr;

    .content_body {
        padding: 2rem 4rem
    }

    .content_sidebar {
        height: 100%;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoint.lg}) {
        display: block;

        .content_sidebar {
            display: none;
        }
    }
`
