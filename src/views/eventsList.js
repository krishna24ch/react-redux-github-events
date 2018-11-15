import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import EventItem from './eventItem';
import { Table } from 'react-bootstrap';

export default class eventsList extends PureComponent {
  static propTypes = {
    events: PropTypes.array
  }

  render() {
    const {events} = this.props;
    return (
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>Name</th>
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
      </div>
    )
  }
}