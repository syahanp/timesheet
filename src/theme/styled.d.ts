import 'styled-components';
import { darkTheme } from './theme';

declare module 'styled-components' {
    
    // kenapa hanya darkTheme? karena disini extend object structure supaya
    // bisa autocomplete dan dark/light theme mempunyai stuktur yang sama
    // maka pilih salah satu
    type Theme = typeof darkTheme;

    export interface DefaultTheme extends Theme {}
}