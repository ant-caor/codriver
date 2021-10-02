import {selector} from 'recoil';
import {Atoms, Models} from '..';

const unactiveDeliveriesState = selector({
  key: 'unactiveDeliveries',
  get: ({get}): Models.Delivery[] | null => {
    const deliveries = get(Atoms.deliveriesState);
    const activeDeliveryId = get(Atoms.activeDeliveryIdState);
    const unactiveDeliveries = deliveries.filter(
      d => d.id !== activeDeliveryId,
    );
    return unactiveDeliveries ? unactiveDeliveries : null;
  },
});

export default unactiveDeliveriesState;
