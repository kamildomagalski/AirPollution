import React from 'react';
import {AppBar, Button, Container, IconButton, Toolbar, Typography} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
  return (
    <>
      <CssBaseline/>
      <AppBar position={"relative"}>
        <Container maxWidth={'md'}>
        <Toolbar>
          <IconButton edge={'start'} aria-label={'menu'}>
            <MenuIcon/>
          </IconButton>
          <Typography>AirPollution</Typography>
        </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;