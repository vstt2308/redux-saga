import React, { Component } from 'react';
//import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { ThemeProvider } from '@material-ui/styles';
import Taskboard from '../Taskboard';
import theme from '../../commons/Theme';
class App extends Component {
  render() {
    // const classes = this.props.classes;
    //const {classes}= this.props;
    return (
      <ThemeProvider theme={theme}>
        <Taskboard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
