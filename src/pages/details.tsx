import React from 'react'
import styled from 'styled-components';
import Header from 'containers/ActivityDetails/Header';
import ActivityDetails from 'containers/ActivityDetails/ActivityDetails';

const Details: React.FC = () => {
    return (
        <div>

            <Header />
            <ActivityDetails />
        </div>
    )
}

export default Details;

const Div = styled.div`
    
`