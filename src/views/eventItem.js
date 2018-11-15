import React from 'react';

export default function EventItem(props) {
  const { eventDetails } = props;
  return (
    <tr>
      <td>
        <div>
          <img className="avatar" src={eventDetails.actor.avatar_url} />
          <h4>{eventDetails.actor.display_login}</h4>
        </div>
      </td>
      <td>{eventDetails.repo.name}</td>
      <td>{eventDetails.type}</td>
      <td>{eventDetails.created_at}</td>
    </tr>
  );
}
