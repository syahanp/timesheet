import React, { useEffect } from 'react';

export const useDetectClickOutsideElement = (ref, func) => {
    useEffect(() => {
        
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                func && func()
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
}