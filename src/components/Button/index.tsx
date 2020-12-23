import React from 'react';
import styled, { useTheme } from 'styled-components';
import { rgba } from 'polished';
import { makeStyles } from '@material-ui/styles';
import { BtnProps, BtnStyledProps } from './types';

const Button = React.forwardRef<HTMLAnchorElement, BtnProps>(
    ({
        variant,
        color,
        size = 'medium',
        disabled = false,
        fullWidth = false,
        href,
        onClick,
        children,
    }, ref
) => {

    const theme = useTheme();
    const useStyle = makeStyles({
        solidPrimary: {
            backgroundColor: theme.pallete.color.primary,
            color: '#fff'
        },
        solidSecondary: {
            backgroundColor: theme.pallete.color.secondary,
            color: '#fff'
        },
        solidDanger: {
            backgroundColor: theme.pallete.color.danger,
            color: '#fff'
        },
        outlinePrimary: {
            border: `1px solid ${theme.pallete.color.primary}`,
            color: theme.pallete.color.primary
        },
        outlineSecondary: {
            border: `1px solid ${theme.pallete.color.secondary}`,
            color: theme.pallete.color.secondary
        },
        outlineDanger: {
            border: `1px solid ${theme.pallete.color.danger}`,
            color: theme.pallete.color.danger
        },
        outlineNeutral: {
            border: `1px solid ${theme.pallete.devider}`,
            color: theme.pallete.text.primary,
            '&:hover': {
                color: theme.pallete.text.primary,
                backgroundColor: rgba(theme.pallete.devider, .4)
            }
        },
        small: {
            padding: '7px 14px',
            fontSize: '14px'
        },
        medium: {
            padding: '12px 1rem',
            fontSize: '16px'
        },
        large: {
            padding: '1.2rem 2rem',
            fontSize: '17px'
        }
    })

    const style = useStyle()
    let btnVariant:any, 
        btnSize:any

    switch (variant) {
        case 'solid':
            if (color === 'primary') btnVariant = style.solidPrimary
            else if (color === 'secondary') btnVariant = style.solidSecondary
            else if (color === 'danger') btnVariant = style.solidDanger
            break;

        case 'outline' :
            if (color === 'primary') btnVariant = style.outlinePrimary
            else if (color === 'secondary') btnVariant = style.outlineSecondary
            else if (color === 'danger') btnVariant = style.outlineDanger
            else if (color === 'neutral') btnVariant = style.outlineNeutral
            break;
            
        default:
            break;
    }

    switch (size) {
        case 'small':
            btnSize = style.small
            break;
        case 'medium':
            btnSize = style.medium
            break;
        case 'large':
            btnSize = style.large
            break;
    
        default:
            break;
    }

    return (
        <ButtonElement
            ref={ref}
            href={href}
            onClick={onClick}
            fullWidth={fullWidth}
            disabled={disabled}
            className={`${btnVariant} ${btnSize}`}
        >
            { children }
        </ButtonElement>
    )
})

export default Button;

const ButtonElement = styled.a<BtnStyledProps>`
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    border-radius: 3px;
    width: ${({fullWidth}) => fullWidth ? `100%` : 'auto'};
    text-align: center;

    &:hover {
        text-decoration: none;
        color: #fff;
    }
`
