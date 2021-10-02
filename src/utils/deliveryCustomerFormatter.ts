import {stringIsEmpty} from '.';
import * as State from '../state';

const formatDeliveryCustomer = (delivery: State.Models.Delivery) => {
  const customerExists = !stringIsEmpty(delivery.customer);
  if (customerExists) {
    return `Customer: ${delivery.customer}.`;
  }
  return 'Unknown customer.';
};

export default formatDeliveryCustomer;
