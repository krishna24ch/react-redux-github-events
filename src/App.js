import React, { Component } from 'react';
import './App.css';
import { Grid, Alert, Row, Col } from 'react-bootstrap';
import EventsList from './views/eventsList';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import { getGithubEvents } from './actions/fetchEventsAction';

class App extends Component {
  constructor(props) {
    super(props);
    this.getEvents = this.getEvents.bind(this);
    this.onUserEnter = this.onUserEnter.bind(this);
  }

  getEvents = debounce((pageAction, userName) => {
    this.props.dispatch(getGithubEvents(pageAction, userName));
  }, 500);

  onUserEnter(event) {
    const searchName = event.target.value;
    this.getEvents('next', searchName);
  }

  render() {
    const { isLoading, githubEvents, errorMessage, page, userName } = this.props;
    return (
      <Grid>
        <Row>
          <Col className="hirizantal-center">
            <h4>Enter github user name</h4>
            <input type="text" onChange={this.onUserEnter} />
          </Col>
        </Row>
        {isLoading && (
          <div className="loading-container">
            <h2>Loading...</h2>
          </div>
        )}
        {errorMessage && errorMessage.length > 0 && (
          <Alert bsStyle="danger" style={{marginTop: '15px'}}>
            <h4>Got an error!</h4>
            <p>{errorMessage}</p>
          </Alert>
        )}
        {Array.isArray(githubEvents) && githubEvents.length > 0 && (
          <div>
            <h3>Latest github events of {userName}</h3>
            <EventsList
              events={githubEvents}
              page={page}
              getEvents={this.getEvents}
            />
          </div>
        )}
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(App);
