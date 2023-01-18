import { 
  AppBar, 
  Container,
  createTheme,
  makestyles, 
  MenuItem, Select,
  Toolbar,
  Typography, 
  ThemeProvider,
} from '@material-ui/core'

import React from 'react'
import {useHistory} from "react-router-dom";
const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  }
}

))


const Header = () => {
  const classes = usestyles();

  const history = useHistory();

  const darkTheme =createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color = 'transparent' position = 'static'>
      <Container>
        <Toolbar>
          <Typography onClick={() => history.push("/")} classNamse={classes.title} variant='h5'>
            Crypto Hunter
          </Typography>
          <Select variant = 'outlined' 
          style={{
            width: 100,
            height: 40,
            marginRight: 15,
          }}>
            <MenuItem value= {'USD'}>USD</MenuItem>
            <MenuItem value= {'INR'}>INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>

    </AppBar>
    </ThemeProvider>
  )
}

export default Header