import { rgba } from 'polished';
import font from 'scss/font.module.scss';

const generalColor = {
    primary: '#5263FF',
    secondary: '#ffffff',
    danger: '#FF2056',
    warning : '#FFB946',
    success : '#2ED47A'
}

const light = {
    pallete: {
        color: generalColor,
        background: {
            body: '#ffffff',
        },
        text: {
            primary: '#38404B',
            secondary: '#909BAA'
        },
        paper: {
            depth1: '#FAFAFA'
        },
        devider: '#E1E1E9',
        form: {
            field: {
                border: '#B9B9B9',
                background: '#ffffff',
                color: '#38404B',
                placeholder: ''
            }
        }
    }
}
  
const dark = {
    pallete: {
        color: generalColor,
        background: {
            body: '#202020',
        },
        text: {
            primary: '#DEDEDE',
            secondary: '#999999'
        },
        paper: {
            depth1: '#282828'
        },
        devider: '#363636',
        form: {
            field: {
                border: '#5C5C5C',
                background: '#202020',
                color: '#DEDEDE',
                placeholder: ''
            }
        }
    }
}

const defaultTheme = {
    breakpoint: {
        sm: '576px',
        md: '768px',
        lg: '992px',
    },
    font: {
        size: 16,
        style: {
            primary: font.primary,
        },
        weight: {
            light: font.light,
            regular: font.regular,
            medium: font.medium,
            bold: font.bold,
            black: font.black
        },
        h1: {
            fontSize: '2rem',
            fontWeight: font.bold,
            lineHeight: 1.5,
            fontFamily: font.heading
        },
        h2: {
            fontSize: '2rem',
            fontWeight: font.bold,
            lineHeight: 1.5,
            fontFamily: font.heading
        },
        h3: {
            fontSize: '1.8rem',
            fontWeight: font.medium,
            lineHeight: 1.5,
            fontFamily: font.heading
        },
        h4: {
            fontSize: '1.25rem',
            fontWeight: font.medium,
            lineHeight: 1.5,
            fontFamily: font.heading
        },
        h5: {
            fontSize: '1.2rem',
            fontWeight: font.medium,
            lineHeight: 1.5,
            fontFamily: font.heading
        },
        paragraph: {
            fontSize: '1rem',
            fontWeight: font.regular,
            lineHeight: 1.75,
            marginbottom: '.5rem',
            fontFamily: font.paragraph
        }
    },
    fn: {
        /**
         * Returns the calculated rem size at given pixel value
         *
         * @param value - size in pixel
         * @returns size in rem
         *
         */
        rem: (value: number):string => {
            let rem = value / defaultTheme.font.size;

            return `${rem}rem`
        }
    }
}

export const lightTheme = {...defaultTheme, ...light}
export const darkTheme = {...defaultTheme, ...dark}