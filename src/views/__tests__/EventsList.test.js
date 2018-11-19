import React from 'react';
import { mount } from 'enzyme';
import EventsList from '../EventsList'

describe('EventsList', () => {
    const events = [{
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
      }];
  it('should render a table', () => {
    const wrapper = mount(<EventsList events={events}/>);
    expect(wrapper.find('table').length).toEqual(1);
  });

  it('should render a table body', () => {
    const wrapper = mount(<EventsList events={events}/>);
    expect(wrapper.find('tbody').children.length).toEqual(1);
  });

  it('should render a table body', () => {
    const wrapper = mount(<EventsList events={events}/>);
    expect(wrapper.find('tbody').children().find('.avatar').prop('src')).toEqual('xyz');
  });
})
