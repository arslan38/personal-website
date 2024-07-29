import { Icon, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
    const {toggleColorMode} = useColorMode()

    return (
        <IconButton
          aria-label="Toggle theme"
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
          //toggleColorMode func assigned to onClick event of button. 
          //Clicking the button will toggle the color mode.
        ></IconButton>
    )
}

export default ThemeToggleButton