import {Config} from '..';
import * as State from '../../state';

/**
 * getDeliveries. Method to get the list of deliveries for a driver.
 * @returns a promise with the list of deliveries for a driver.
 */
const getDeliveries = (): Promise<State.Models.Delivery[]> => {
  return new Promise<State.Models.Delivery[]>((resolve, reject) => {
    fetch(`${Config.baseUrl}/deliveries`)
      .then(result => {
        result
          .json()
          .then(json => {
            resolve(json);
          })
          .catch(err => reject(err));
      })
      .catch(err => reject(err));
  });
};

export default getDeliveries;
