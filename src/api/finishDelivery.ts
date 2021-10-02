type FinishDeliveryParams = {
  deliveryId: string;
  status: string;
  latitude: number;
  longitude: number;
};

const finishDelivery = (params: FinishDeliveryParams) => {
  return fetch(
    'https://60e84194673e350017c21844.mockapi.io/api/finishDelivery',
    {
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
    },
  );
};

export default finishDelivery;
