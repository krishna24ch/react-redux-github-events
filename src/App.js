import React, { Component } from 'react';
import './App.css';
import { Grid, Row } from 'react-bootstrap';
import EventsList from './views/eventsList';
import { connect } from 'react-redux'
import { getGithubEvents } from './actions/fetchEventsAction'


class App extends Component {
  componentWillMount()  {
    this.props.dispatch(getGithubEvents(0))
  }

  render() {
    const {isLoading, githubEvents, isError } = this.props;
    console.log('events----> ', githubEvents);
    return (
      <Grid>
          <h3>Latest github events</h3>
          {
            isLoading && <h2>Loading...</h2>
          }
          {
            isError && <h2>Somthing went wrong while getting the events from github</h2>
          }
          {
            Array.isArray(githubEvents) 
              && githubEvents.length > 0 
              && <EventsList events={githubEvents}></EventsList>
          }
      </Grid>

    );
  }
}

const mapStateToProps = state => {
  return {...state}
}

export default connect(mapStateToProps)(App);
