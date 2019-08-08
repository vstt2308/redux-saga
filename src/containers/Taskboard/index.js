import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Addicon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TaskForm from '../../components/TaskForm';
import { STATUSES } from '../../contants';
import styles from './styles';
import TaskList from '../../components/TaskList';

const listTask = [
  {
    id: 1,
    title: 'Hello',
    description: 'Chin chào nhọi nhười',
    status: 0,
  },
  {
    id: 2,
    title: 'Play football',
    description: 'With my friend',
    status: 2,
  },
  {
    id: 3,
    title: 'Play game',
    description: 'With my friend',
    status: 1,
  },
];
class TaskBoard extends Component {
  state = {
    open: false,
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  openForm = () => {
    this.setState({
      open: true,
    });
  };
  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map(status => {
          const taskFilter = listTask.filter(
            task => task.status === status.value,
          );
          return (
            <TaskList tasks={taskFilter} status={status} key={status.value} />
          );
        })}
      </Grid>
    );
    return xhtml;
  }
  renderForm() {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <Addicon /> Add new jobs
        </Button>

        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}
TaskBoard.propTypes = {
  classes: PropTypes.object,
};
export default withStyles(styles)(TaskBoard);
