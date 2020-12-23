import React, { useCallback, useEffect, useState } from 'react';
import { AttachmentProps } from './type';

const Attachment: React.FC<AttachmentProps> = ({
    name,
    value,
    onChange,
    error,
    hint,
    multiple = false,
    layout = 'inline',
}) => {

    const [files, setFiles] = useState([]);

    const onFileSelect = useCallback((e : any) => {
        if (multiple) {
            setFiles([...files, e.currentTarget.files[0]])
        }
        else {
            onChange(name, e.currentTarget.files[0])
        }
    }, [])

    useEffect(() => {
        console.log(files);
    }, [files])

    if (layout === 'inline') {
        return (
            <input 
                name={name}
                type='file' 
                onChange={onFileSelect}
                className="form-control"
            />
        )
    }

    else {
        return null
    }
}

export default Attachment
