import React from 'react'
import styled from 'styled-components';

const Header: React.FC = () => {
    return (
        <Div>
            <h3>Add Today Activity</h3>
        </Div>
    )
}

export default Header

const Div = styled.div`
    margin-bottom: 2rem;
    align-items: center;

    h3 {
        margin-right: 2rem;
        font-weight: ${({theme}) => theme.font.weight.light};
    }
`