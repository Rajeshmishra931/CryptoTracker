import { 
  AppBar, 
  Container,
  makestyles, 
  MenuItem, Select,
  Toolbar,
  Typography, 
} from '@material-ui/core'

import React from 'react'

const useStyles = makeStyles(() => ({}

))


const Header = () => {
  return (
    <AppBar color = 'transparent' position = 'static'>
      <Container>
        <Toolbar>
          <Typography>
            Crypto Hunter
          </Typography>
          <Select variant = 'outlined' 
          style={{
            width: 100,
            height: 40,
            marginleft: 15,
          }}>
            <MenuItem value= {'USD'}>USD</MenuItem>
            <MenuItem value= {'INR'}>INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>

    </AppBar>
  )
}

export default Header