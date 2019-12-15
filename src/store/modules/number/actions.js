export function createNumberRequest(data) {
  return {
    type: '@number/CREATE_NUMBER_REQUEST',
    payload: { data },
  };
}
export function createNumberSuccess(number) {
  return {
    type: '@number/CREATE_NUMBER_SUCCESS',
    payload: { number },
  };
}
export function createNumberFailer() {
  return {
    type: '@number/CREATE_NUMBER_FAILER',
  };
}
