import {FinishedDeliveryStatus} from '.';

export type FinishedDelivery = {
  id: string;
  deliveryId: string;
  latitude: number;
  longitude: number;
  status: FinishedDeliveryStatus;
};
