import {stringIsEmpty} from '.';
import * as State from '../state';

/**
 * formatDeliveryCustomer. A method to format the delivery customer information.
 * @param delivery The delivery information to format.
 * @returns a string with the formatted delivery customer information.
 */
const formatDeliveryCustomer = (delivery: State.Models.Delivery) => {
  const customerExists = !stringIsEmpty(delivery.customer);
  if (customerExists) {
    return `Customer: ${delivery.customer}.`;
  }
  return 'Unknown customer.';
};

export default formatDeliveryCustomer;
