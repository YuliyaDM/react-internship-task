import { createContext } from 'react'

const themes = {
	dark: 'dark',
	light: 'light'
}

const ThemeContext = createContext(themes.dark)

export default ThemeContext
