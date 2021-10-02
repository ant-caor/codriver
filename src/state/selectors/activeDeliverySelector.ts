import {selector} from 'recoil';
import {Atoms, Models} from '..';

const activeDeliveryState = selector({
  key: 'activeDelivery',
  get: ({get}): Models.Delivery | null => {
    const deliveries = get(Atoms.deliveriesState);
    const activeDeliveryId = get(Atoms.activeDeliveryIdState);
    const delivery = deliveries.find(d => d.id === activeDeliveryId);
    return delivery ? delivery : null;
  },
});

export default activeDeliveryState;
