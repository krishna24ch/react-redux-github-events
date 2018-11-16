import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import EventItem from './eventItem';
import { Table } from 'react-bootstrap';
import Pager from 'react-bootstrap/lib/Pager'

export default class EventsList extends PureComponent {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }
  static propTypes = {
    events: PropTypes.array,
    page: PropTypes.number,
    getEvents: PropTypes.func
  }

  nextPage() {
    this.props.getEvents('next');
  }

  previousPage() {
    this.props.getEvents('previous');
  }

  render() {
    const {events} = this.props;
    return (
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>User</th>
              <th>Repo Name</th>
              <th>Type</th>
              <th>Created at</th>
            </tr>
          </thead>
          <tbody>
            {
              events && events.map(eventItem => {
                return <EventItem key={eventItem.id} eventDetails={eventItem} />
              })
            }
          </tbody>
        </Table>
        <Pager>
          <Pager.Item disabled={this.props.page <= 1} previous href="#" onClick={this.previousPage}>
            &larr; Previous
          </Pager.Item>
          <Pager.Item next href="#" disabled={this.props.events.length < 5} onClick={this.nextPage}>
            Next &rarr;
          </Pager.Item>
        </Pager>
      </div>
    )
  }
}