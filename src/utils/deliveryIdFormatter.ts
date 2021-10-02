import {stringIsEmpty} from '.';
import * as State from '../state';

const formatDeliveryId = (delivery: State.Models.Delivery) => {
  const idExists = !stringIsEmpty(delivery.id);
  if (idExists) {
    return `Delivery #${delivery.id}`;
  }
  return 'Unable to load delivery data.';
};

export default formatDeliveryId;
