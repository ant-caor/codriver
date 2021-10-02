import {Config} from '..';

const getDeliveries = () => {
  return fetch(`${Config.baseUrl}/deliveries`);
};

export default getDeliveries;
