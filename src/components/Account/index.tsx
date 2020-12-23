import React from 'react';
import Avatar from 'react-avatar';
import styled from 'styled-components';

const Account: React.FC = () => {
    return (
        <Div>
            <Avatar 
                name='Aligar Syahan Putra' 
                size='45' 
                color='#8567FF' 
                maxInitials={1}
                round 
            />

            <div>
                <Name>Aligar Syahan Putra, S.H.</Name>
                <Job>Dosen</Job>
            </div>
        </Div>
    )
}

export default Account;

const Div = styled.div`
    display: flex;
    align-items: center;
    grid-column-gap: 12px;
`

const Name = styled.div`
    color: ${({theme}) => theme.pallete.text.primary};
    font-weight: ${({theme}) => theme.font.weight.regular};
    font-size: 14px;
`
const Job = styled.div`
    color: ${({theme}) => theme.pallete.text.secondary};
    font-weight: ${({theme}) => theme.font.weight.regular};
    font-size: 14px;
`