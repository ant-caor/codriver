export default {
  addListener: jest.fn(),
  getCurrentPosition: jest.fn(cb => cb({})),
  removeListeners: jest.fn(),
  requestAuthorization: jest.fn(),
  setConfiguration: jest.fn(),
  startObserving: jest.fn(),
  stopObserving: jest.fn(),
  setRNConfiguration: jest.fn(),
};
