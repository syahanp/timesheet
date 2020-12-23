import React from 'react';

export interface BtnStyledProps {
    disabled? : boolean
    fullWidth? : boolean
}

export interface BtnProps extends BtnStyledProps {
    variant: 'solid' | 'outline' | 'text'
    color: 'primary' | 'secondary' | 'danger' | 'warning' | 'neutral'
    size?: 'large' | 'medium' | 'small'
    href?: string
    children: React.ReactNode
    onClick? : () => void
}