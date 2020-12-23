export const calculatePxToRem = (value: number):string => {
    let rem = value/16;

    return `${rem}rem`
}