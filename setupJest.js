require('jest-fetch-mock').enableMocks();

jest.doMock('recoil', () => require('recoil/native/recoil'));
