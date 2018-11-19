import ActionTypes from '../../actions/actionTypes';
import reducer from '../index';

const initialState = {
    githubEvents: [],
    isLoading: false,
    errorMessage: '',
    page: 0,
    userName: ''
  };

describe('reducers', () => {
    it('returns initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('returns new state with loading value true', () => {
        expect(reducer(initialState, { type: ActionTypes.FETCH_EVENTS })).toEqual({...initialState, isLoading: true });
    })

    it('returns new state if fetch events success', () => {
        const events = [{id: 1}, { id: 2}];
        expect(reducer(initialState, { type: ActionTypes.FETCH_EVENTS_SUCCESS, events })).toEqual({...initialState, isLoading: false, githubEvents: events });
    });

    it('returns new state if fetch events success', () => {
        const errorMessage = 'Unable to fetch events';
        expect(reducer(initialState, { type: ActionTypes.FETCH_FAILED, errorMessage })).toEqual({...initialState, isLoading: false, errorMessage });
    })
})
