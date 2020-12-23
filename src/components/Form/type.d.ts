import React from 'react';

interface FormAttr {
    name : any
    value : any
    error? : any
    hint? : string
}

export interface FieldProps extends FormAttr  {
    /**
     * HTML form element to render
     * @param textbox input form HTML element
     * @param textarea textarea form HTML element
     */
    variant? : 'textbox' | 'textarea'

    onChange: (e : React.FormEvent<any>) => void
    onBlur: (e : React.FormEvent<any>) => void
    placeholder? : string 
    type? : "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week"
}

export interface AttachmentProps extends FormAttr {
    onChange: (name: any, e : React.FormEvent<any>) => void
    multiple?: boolean
}

export interface TimepickerProps extends FormAttr {
    onChange: (e : React.FormEvent<any>) => void
    onBlur: (e : React.FormEvent<any>) => void
}