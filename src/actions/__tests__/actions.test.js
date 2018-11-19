import ActionTypes from '../actionTypes';
import * as Actions from '../index';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'

const middleWare = [thunk];
const mockStore = configureMockStore(middleWare);


describe('actions', () => {
  it('should create an action while fetching events from github', () => {
    const userName = 'testUser';
    const expectedAction = {
        type: ActionTypes.FETCH_EVENTS,
        userName
    }

    expect(Actions.fetchEvents(userName)).toEqual(expectedAction);
  });
  
  it('should create an action after fetching events success', () => {
    const events = [{id: 1}, {id: 2}];
    const returnAction = {
        type: ActionTypes.FETCH_EVENTS_SUCCESS,
        events
    }
    expect(Actions.receiveEvents(events)).toEqual(returnAction);
  });
  
  it('should create an action after fetching events failed', () => {
    const errorMessage = 'Error while fetching events';
    const returnAction = {
        type: ActionTypes.FETCH_FAILED,
        errorMessage
    }
    expect(Actions.receivedError(errorMessage)).toEqual(returnAction);
  });

  it('should create an action on previous page hit', () => {
    const returnAction = {
        type: ActionTypes.PREVIOUS_PAGE
    }
    expect(Actions.previousPage()).toEqual(returnAction);
  });

  it('should create an action on next page hit', () => {
    const returnAction = {
        type: ActionTypes.NEXT_PAGE
    }
    expect(Actions.nextPage()).toEqual(returnAction);
  });

  it('expected actions should be dispatched on successful request', async () => {
    const store = mockStore({
      githubEvents: [],
      isLoading: true,
      errorMessage: '',
      page: 0,
      userName: ''
    })
    const expectedActions = ['FETCH_FAILED']

    await store.dispatch(Actions.getGithubEvents('next', 'test'));
    const actualActions = store.getActions().map(action => action.type);
    expect(actualActions).toEqual(expectedActions)
  });

})
