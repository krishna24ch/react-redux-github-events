import store from '../store';
import ActionTypes from './actionTypes';

export const fetchEvents = (userName) => {
    return {
        type: ActionTypes.FETCH_EVENTS,
        userName
    };
};

export const receiveEvents = (events) => {
    return {
        type: ActionTypes.FETCH_EVENTS_SUCCESS,
        events
    };
};

export const receivedError = (errorMessage) => {
    return {
        type: ActionTypes.FETCH_FAILED,
        errorMessage
    };
};

export const previousPage = () => {
    return {
        type: ActionTypes.PREVIOUS_PAGE
    }
}

export const nextPage = () => {
    return {
        type: ActionTypes.NEXT_PAGE
    }
}

export const getGithubEvents = (pageAction, userName) => {
    store.dispatch(fetchEvents(userName));
    store.dispatch(pageAction === 'next' ? nextPage() : previousPage());
    return (dispatch, getState) => {
        return fetch(`https://api.github.com/users/${getState().userName}/events?page=${getState().page}&per_page=5`).then(data => data.json())
            .then(data => {
                if(data.message) {
                    throw new Error("Unable to fetch data");
                } else if(data.length <= 0) {
                    throw new Error("No events available for this user");
                } else {
                    dispatch(receiveEvents(data));
                }
            }).catch(error => {
                dispatch(receivedError(error.message));
            });
    };
};