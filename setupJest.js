require('jest-fetch-mock').enableMocks();

jest.doMock('recoil', () => require('recoil/native/recoil'));
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
