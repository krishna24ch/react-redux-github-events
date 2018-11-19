import React from 'react';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';

export default function EventItem(props) {
  const { eventDetails } = props;
  return (
    <tr>
      <td>
        <Row>
          <Col xs={2} className="user-image">
            <img alt="" className="avatar" src={eventDetails.actor.avatar_url} />
          </Col>
          <Col xs={9}>
            <b>Name: {eventDetails.actor.display_login}</b>
            <p>Id: {eventDetails.actor.id}</p>
          </Col>
        </Row>
      </td>
      <td>{eventDetails.repo.name}</td>
      <td>{eventDetails.type}</td>
      <td>{moment(eventDetails.created_at).format('YYYY-MM-DD HH:mm')}</td>
    </tr>
  );
}
