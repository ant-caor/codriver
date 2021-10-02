import {selector} from 'recoil';
import {Atoms, Models} from '..';

const EmptyDelivery: Models.Delivery = {
  id: '',
  customer: '',
  address: '',
  city: '',
  zipCode: '',
  latitude: 0,
  longitude: 0,
};

const selectedDeliveryState = selector({
  key: 'selectedDelivery',
  get: ({get}): Models.Delivery => {
    const deliveries = get(Atoms.deliveriesState);
    const selectedDeliveryId = get(Atoms.selectedDeliveryIdState);
    const delivery = deliveries.find(d => d.id === selectedDeliveryId);
    return delivery ? delivery : EmptyDelivery;
  },
});

export default selectedDeliveryState;
