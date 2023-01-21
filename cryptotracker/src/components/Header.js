import { 
  AppBar, 
  Container,
  MenuItem, Select,
  Toolbar,
  Typography, 
} from '@material-ui/core'

import { createTheme, ThemeProvider, makeStyles,} from '@material-ui/core/styles'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import { CryptoState } from "../CryptoContext";

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
  const classes = useStyles();

  const history = useNavigate();

  const { currency, setCurrency } = CryptoState();

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
          <Typography onClick={() => history.push("/")} className={classes.title} variant='h5'>
            Crypto Hunter
          </Typography>
          <Select variant = 'outlined' 
          style={{
            width: 100,
            height: 40,
            marginRight: 15,
          }}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          >
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