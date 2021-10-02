import * as State from '../state';

const formatDeliveryAddress = (delivery: State.Models.Delivery): string => {
  return `${delivery.address}, ${delivery.city}.`;
};

export {formatDeliveryAddress};
