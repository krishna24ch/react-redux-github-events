import store from '../store';

export const fetchEvents = () => {
    return {
        type: 'FETCH_EVENTS'
    };
};

export const receiveEvents = (events) => {
    return {
        type: 'FETCH_EVENTS_SUCCESS',
        events
    };
};

export const receivedError = (error) => {
    return {
        type: 'FETCH_FAILED',
        error
    };
};

export const getGithubEvents = (page) => {
    store.dispatch(fetchEvents());
    return (dispatch, getState) => {
        return fetch(`https://api.github.com/events?page=${page}`).then(data => data.json())
            .then(data => {
                dispatch(receiveEvents(data));
            }).catch(error => {
                dispatch(receivedError(error));
            });
    };
};