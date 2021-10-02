import {selector} from 'recoil';
import {Atoms, Models} from '..';

const selectedDeliveryState = selector({
  key: 'selectedDelivery',
  get: ({get}): Models.Delivery | null => {
    const deliveries = get(Atoms.deliveriesState);
    const selectedDeliveryId = get(Atoms.selectedDeliveryIdState);
    const delivery = deliveries.find(d => d.id === selectedDeliveryId);
    return delivery ? delivery : null;
  },
});

export default selectedDeliveryState;
