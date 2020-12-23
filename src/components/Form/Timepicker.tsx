import React, { useEffect } from 'react'
import { TimepickerProps } from './type';
import styled from 'styled-components';
import Field from './Field';

const Timepicker: React.FC<TimepickerProps> = ({
    name,
    value,
    error,
    hint,
    onChange,
    onBlur,
}) => {
    
    return (
        <Div>
            <div className="datepicker__contain">
                <Field
                    variant='textbox'
                    name={name}
                    type='time'
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            </div>

            <p>contoh : 06:41 AM</p>
        </Div>
    )
}

export default Timepicker;

const Div = styled.div`
    .datepicker__contain {
        max-width: 150px;
    }

    p {
        margin-top: .2rem;
        margin-bottom: 0;
        color: ${({theme}) => theme.pallete.text.secondary};
        font-style: italic;
        font-size: 13.5px;
    }
`
