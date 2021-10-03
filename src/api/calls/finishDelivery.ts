import {Config} from '..';

import * as State from '../../state';

type FinishDeliveryParams = {
  deliveryId: string;
  status: State.Models.FinishedDeliveryStatus;
  latitude: number;
  longitude: number;
};

/**
 * finishDelivery. Method to mark a delivery as finished with the Codriver API.
 * @param params the delivery information to mark it as delivered.
 * @returns a promise with the finished delivery information.
 */
const finishDelivery = (
  params: FinishDeliveryParams,
): Promise<State.Models.FinishedDelivery> => {
  return new Promise<State.Models.FinishedDelivery>((resolve, reject) => {
    fetch(`${Config.baseUrl}/finishDelivery`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        deliveryId: params.deliveryId,
        status: params.status,
        latitude: params.latitude,
        longitude: params.longitude,
      }),
    })
      .then(response => {
        response
          .json()
          .then(json => {
            resolve(json);
          })
          .catch(err => {
            reject(err);
          });
      })
      .catch(err => {
        reject(err);
      });
  });
};

export {finishDelivery};
