import produce from 'immer';

const INITIAL_STATE = {
  number: null,
};

export default function number(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@number/CREATE_NUMBER_SUCCESS': {
        draft.number = action.payload.number;
        break;
      }

      default:
    }
  });
}
