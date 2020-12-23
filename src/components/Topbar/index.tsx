import Account from 'components/Account';
import ThemeSwitcher from 'components/ThemeSwitcher';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Topbar: React.FC = () => {
    return (
        <Div>
            <Link href='/dashboard'>
                <a><h4>FH UI Timesheet</h4></a>
            </Link>
            <div className="flex">
                <ThemeSwitcher />
                <Account />
            </div>
        </Div>
    )
}

export default Topbar;

const Div = styled.div`
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme}) => theme.pallete.background.body};
    border-bottom: ${({theme}) => `1px solid ${theme.pallete.devider}`};
    color: ${({theme}) => theme.pallete.text.primary};

    .flex {
        display: flex;
        align-items: center;
    }
`
