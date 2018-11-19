import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import configureStore from 'redux-mock-store';

describe('App component', () => {
  it('renders without crashing', () => {
    const initialState = {
      githubEvents: [],
      isLoading: false,
      errorMessage: '',
      page: 0,
      userName: ''
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const wrapper = mount(<App store={store} />);
    expect(wrapper.find('.container').length).toEqual(1);
    expect(wrapper.find('.loading-container').length).toEqual(0);
  });

  it('renders loading', () => {
    const initialState = {
      githubEvents: [],
      isLoading: true,
      errorMessage: '',
      page: 0,
      userName: ''
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const wrapper = mount(<App store={store} />);
    expect(wrapper.find('.loading-container').length).toEqual(1);
  });

  it('renders loading', () => {
    const initialState = {
      githubEvents: [
        {
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
        }
      ],
      isLoading: false,
      errorMessage: '',
      page: 0,
      userName: ''
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const wrapper = mount(<App store={store} />);
    expect(wrapper.find('.loading-container').length).toEqual(0);
    expect(wrapper.render().find('table').length).toEqual(1);
  });
});
