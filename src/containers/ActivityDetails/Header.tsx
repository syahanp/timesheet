import React from 'react'
import styled from 'styled-components';

const Header = () => {
    return (
        <Div>
            <h3>Activity Details</h3>
            {/* <div className='delete_activity' onClick={() => console.log("TEST")}> 
                Delete this activity 
            </div> */}
        </Div>
    )
}

export default Header;

const Div = styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .delete_activity {
        color: ${({theme}) => theme.pallete.color.danger};
        text-decoration: underline;
    }

    h3 {
        margin-right: 2rem;
        font-weight: ${({theme}) => theme.font.weight.light};
    }
`
