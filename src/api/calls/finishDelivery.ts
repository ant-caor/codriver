import {Config} from '..';

enum Status {
  DELIVERED = 'DELIVERED',
  UNDELIVERED = 'UNDELIVERED',
}

type FinishDeliveryParams = {
  deliveryId: string;
  status: Status;
  latitude: number;
  longitude: number;
};

const finishDelivery = (params: FinishDeliveryParams) => {
  return fetch(`${Config.baseUrl}/finishDelivery`, {
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
  });
};

export {finishDelivery, Status};
