import React, { useRef, useState } from 'react'
import Calendar from 'react-calendar';
import styled from 'styled-components';
import { format } from 'date-fns';
import { useDetectClickOutsideElement } from 'hooks';
import Button from 'components/Button';

const DatePicker: React.FC = () => {
    const [currentDate, setDate] = useState(new Date());
    const [isOpen, setOpen] = useState(false)

    const Ref = useRef()

    useDetectClickOutsideElement(Ref, () => setOpen(false))
    
    return (
        <Div ref={Ref}>
            {/* <div 
                className='date__placeholder' 
                onClick={() => setOpen(!isOpen)}
            >
                { format(currentDate, 'eeee, d MMMM y') }
            </div> */}
            <Button size='medium' color='neutral' variant='outline' onClick={() => setOpen(!isOpen)}>
                { format(currentDate, 'eeee, d MMMM y') }
            </Button>
            {
                isOpen &&
                <div className="date__calendar">
                    <Calendar
                        onChange={(value: Date) => {
                            setDate(value)
                            setOpen(false)
                        }}
                        value={currentDate}
                    />
                </div>
            }
        </Div>
    )
}

export default DatePicker;

const Div = styled.div`
    position: relative;

    .date__placeholder {
        padding: 6px 10px;
        cursor: pointer;
        border: ${({theme}) => `1px solid ${theme.pallete.devider}`};
        color: ${({theme}) => theme.pallete.text.primary};
        font-weight: ${({theme}) => theme.font.weight.light};
    }

    .date__calendar {
        position: absolute;
        top: 100%;
        left: 0;
    }
`