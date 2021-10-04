import {locationIsValid} from '..';

type Location = {
  latitude: number;
  longitude: number;
};

const locationWithNullLatMock: Location = {
  // @ts-ignore
  latitude: null,
  longitude: 2.33,
};

const locationWithNullLonMock: Location = {
  latitude: 1.2,
  // @ts-ignore
  longitude: null,
};

const validLocation: Location = {
  latitude: 0.2,
  longitude: 1.0,
};

test('Checking if a location with null latitude is valid. ', () => {
  expect(locationIsValid(locationWithNullLatMock)).toBe(false);
});

test('Checking if a location with null longitude is valid. ', () => {
  expect(locationIsValid(locationWithNullLonMock)).toBe(false);
});

test('Checking if a location with valid longitude and latitude is valid. ', () => {
  expect(locationIsValid(validLocation)).toBe(true);
});
