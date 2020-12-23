import { createGlobalStyle } from 'styled-components';
import { rgba } from 'polished';
import { calculatePxToRem } from './ThemeHelper';

export const GlobalStyle = createGlobalStyle`

    * {
        transition: all .15s ease-in-out;
    }

    // sreen size
    --screen-xm: ${({theme}) => theme.breakpoint.sm};
    --screen-md: ${({theme}) => theme.breakpoint.md};
    --screen-lg: ${({theme}) => theme.breakpoint.lg};

    body {
        background-color: ${({theme}) => theme.pallete.background.body} !important;
    }

    a {
        text-decoration: none;

        &:hover {
            text-decoration: none;
        }
    }
    
    h1, h2, h3, h4, h5 {
        margin-top: 0rem !important;
        margin-bottom: 0rem !important;
    }

    h1 {
        font-size: ${calculatePxToRem(38)};
        line-height: 1.5;
        font-weight: ${({theme}) => theme.font.weight.light};
        font-family: ${({theme}) => theme.font.style.primary};
        color: ${({theme}) => theme.pallete.text.primary};
    }
    h2 {
        font-size: ${calculatePxToRem(36)};
        line-height: 1.5;
        font-weight: ${({theme}) => theme.font.weight.regular};;
        font-family: ${({theme}) => theme.font.style.primary};
        color: ${({theme}) => theme.pallete.text.primary};
    }
    h3 {
        font-size: ${calculatePxToRem(28)};
        line-height: 1.5;
        font-weight: ${({theme}) => theme.font.weight.regular};
        font-family: ${({theme}) => theme.font.style.primary};
        color: ${({theme}) => theme.pallete.text.primary};
    }
    h4 {
        font-size: ${calculatePxToRem(22)};
        line-height: 1.5;
        font-weight: ${({theme}) => theme.font.weight.medium};
        font-family: ${({theme}) => theme.font.style.primary};
        color: ${({theme}) => theme.pallete.text.primary};
    }
    h5 {
        font-size: ${calculatePxToRem(18)};
        line-height: 1.5;
        font-weight: ${({theme}) => theme.font.weight.medium};
        font-family: ${({theme}) => theme.font.style.primary};
        color: ${({theme}) => theme.pallete.text.primary};
    }

    p {
        font-size: 1rem;
        line-height: 1.5rem;
        margin-bottom: 0rem;
        font-weight: ${({theme}) => theme.font.weight.regular};
        font-family: ${({theme}) => theme.font.style.primary};
        color: ${({theme}) => theme.pallete.text.primary};
    }

    hr {
        border: ${({theme}) => `1px solid ${theme.pallete.devider}`};
    }

    input, textarea {
        color: ${({theme}) => theme.pallete.form.field.color} !important;
        background-color: ${({theme}) => theme.pallete.form.field.background} !important;
        border: ${({theme}) => `1px solid ${theme.pallete.form.field.border}`} !important;
        transition: all .2s ease-in-out;

        &::placeholder {

        }

        &:focus {
            border: ${({theme}) => `1px solid ${theme.pallete.color.primary}`} !important;
            box-shadow: 0;
        }
    }

    label {
        color: ${({theme}) => theme.pallete.text.primary};
        font-weight: ${({theme}) => theme.font.weight.medium};
    }

    // progress bar custom styling
    #nprogress .bar {
        background: ${({theme}) => theme.pallete.color.success} !important;
        height: 3px !important;
        box-shadow: ${({theme}) => `0px 3px 15px 0px ${rgba(theme.pallete.color.success, .5)}`};
    }


    #nprogress .spinner-icon {
        border-top-color: ${({theme}) => theme.pallete.color.success};
        border-left-color: ${({theme}) => theme.pallete.color.success};
    }
`