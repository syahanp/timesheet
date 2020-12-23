import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyles';
import { lightTheme, darkTheme } from './theme';

const ThemeUpdate = createContext(null)

export const useThemeUpdate = () => {
    return useContext(ThemeUpdate)
}

const ThemeProvider: React.FC = ({ children }) => {
    const [isDarkTheme, setDarkTheme] = useState(false)

    const currentTheme = isDarkTheme ? darkTheme : lightTheme

    return (
        <StyledProvider theme={currentTheme}>
            <ThemeUpdate.Provider value={setDarkTheme}>
                <GlobalStyle />
                { children }
            </ThemeUpdate.Provider>
        </StyledProvider>
    )
}

export default ThemeProvider;
