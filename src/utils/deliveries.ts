import * as State from '../state';

const getUndeliveredDeliveries = (
  deliveries: State.Models.Delivery[],
  deliveredDeliveries: State.Models.FinishedDelivery[],
): State.Models.Delivery[] => {
  const deliveryIds: string[] = Array.from(deliveries, d => d.id);
  const deliveredDeliveryIds: string[] = Array.from(
    deliveredDeliveries,
    dd => dd.deliveryId,
  );
  const undeliveredDeliveryIds = deliveryIds.filter(d =>
    deliveredDeliveryIds.includes(d),
  );
  return deliveries.filter(d => !undeliveredDeliveryIds.includes(d.id));
};

const getDeliveredDeliveries = (
  deliveries: State.Models.Delivery[],
  deliveredDeliveries: State.Models.FinishedDelivery[],
): State.Models.Delivery[] => {
  const deliveryIds: string[] = Array.from(deliveries, d => d.id);
  const deliveredDeliveryIds: string[] = Array.from(
    deliveredDeliveries,
    dd => dd.deliveryId,
  );
  const undeliveredDeliveryIds = deliveryIds.filter(d =>
    deliveredDeliveryIds.includes(d),
  );
  return deliveries.filter(d => undeliveredDeliveryIds.includes(d.id));
};

export {getUndeliveredDeliveries, getDeliveredDeliveries};
