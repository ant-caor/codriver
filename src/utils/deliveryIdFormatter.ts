import {stringIsEmpty} from '.';
import * as State from '../state';

/**
 * formatDeliveryId. A method to format the delivery id.
 * @param delivery The delivery information to format.
 * @returns a string with the formatted delivery id information.
 */
const formatDeliveryId = (delivery: State.Models.Delivery) => {
  const idExists = !stringIsEmpty(delivery.id);
  if (idExists) {
    return `Delivery #${delivery.id}`;
  }
  return 'Unable to load delivery data.';
};

export default formatDeliveryId;
