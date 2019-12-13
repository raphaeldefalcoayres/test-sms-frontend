import produce from 'immer';

const INITIAL_STATE = {
  message: null,
};

export default function message(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@message/CREATE_MESSAGE_SUCCESS': {
        draft.message = action.payload.message;
        break;
      }

      default:
    }
  });
}
