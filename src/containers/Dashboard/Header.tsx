import React from 'react'
import styled from 'styled-components';
import DatePicker from 'components/DatePicker';

const Header: React.FC = () => {
    return (
        <Div>
            <h1>Daily Timesheet</h1>
            <DatePicker />
        </Div>
    )
}

export default Header;

const Div = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;

    h1 {
        margin-right: 2rem;
    }
`
