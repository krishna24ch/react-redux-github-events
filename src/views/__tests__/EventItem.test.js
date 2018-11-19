import React from 'react';
import { mount } from 'enzyme';
import EventItem from '../EventItem';

describe('EventsList', () => {
  let wrapper;
  beforeEach(() => {
    const event = {
      id: '1',
      type: 'CreateEvent',
      actor: {
        login: 'fridex',
        display_login: 'fridex',
        avatar_url: 'xyz'
      },
      repo: {
        name: 'abc'
      },
      created_at: '2018-19-14T12:59:44Z'
    };
    wrapper = mount(<EventItem eventDetails={event} />);
  });
  it('should render a table row', () => {
    expect(wrapper.find('tr').length).toEqual(1);
  });

  it('should render a table row with 4 coulmns', () => {
    expect(wrapper.render().children().length).toEqual(4);
  });

  it('should render a table body', () => {
    expect(wrapper.find('.avatar').prop('src')).toEqual('xyz');
  });
});
