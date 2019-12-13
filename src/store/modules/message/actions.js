export function createMessageRequest(data) {
  return {
    type: '@message/CREATE_MESSAGE_REQUEST',
    payload: { data },
  };
}
export function createMessageSuccess(message) {
  return {
    type: '@message/CREATE_MESSAGE_SUCCESS',
    payload: { message },
  };
}
export function createMessageFailer() {
  return {
    type: '@message/CREATE_MESSAGE_FAILER',
  };
}
