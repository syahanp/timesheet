import React from 'react'
import Link from 'next/link'
import Button from 'components/Button';
import styled from 'styled-components';

const CurrentTimesheet: React.FC = () => {
    return (
        <Div>
            <div className="current_time">
                <h3>Today</h3>
                <h5>11h 27m</h5>
            </div>
            <div className="action">
                <Link href='/add' passHref>
                    <Button variant='solid' color='primary'>
                        Add Today Activity
                    </Button>
                </Link>
            </div>
        </Div>
    )
}

export default CurrentTimesheet;

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    .current_time {
        display: flex;
        align-items: baseline;

        h3 {
            margin-right: 1rem;
            margin-bottom: 0rem !important;
        }
        
        h5 {
            font-weight: ${({theme}) => theme.font.weight.light} !important;
            color: ${({theme}) => theme.pallete.text.secondary} !important;
        }
    }
` 
