import React from 'react'
import { FieldProps } from './type'

const Field: React.FC<FieldProps> = ({
    name,
    value,
    onChange,
    onBlur,
    error,
    hint,
    placeholder,
    type = 'text',
    variant = 'textbox'
}) => {

    if (variant === 'textbox') {
        return (
            <input 
                name={name}
                type={type} 
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                className="form-control"
                placeholder={placeholder}
            />
        )
    }

    if (variant === 'textarea') {
        return (
            <textarea 
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                className="form-control"
                placeholder={placeholder}
            />
        )
    }

    else {
        return null
    }
    
}

export default Field
