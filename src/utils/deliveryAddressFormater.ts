import {stringIsEmpty} from '.';
import * as State from '../state';

/**
 * formatDeliveryAddress. A method to format the address of a delivery.
 * @param delivery The delivery information to format.
 * @returns a string with the formatted address.
 */
const formatDeliveryAddress = (delivery: State.Models.Delivery): string => {
  const addressExists = !stringIsEmpty(delivery.address);
  const cityExists = !stringIsEmpty(delivery.city);
  if (addressExists && cityExists) {
    return `${delivery.address}, ${delivery.city}.`;
  } else if (addressExists) {
    return `${delivery.address}.`;
  } else if (cityExists) {
    return `${delivery.city}.`;
  }
  return 'Unknown address.';
};

export default formatDeliveryAddress;
