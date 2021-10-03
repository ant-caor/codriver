import * as State from '../state';

const getUndeliveredDeliveryIds = (
  deliveries: State.Models.Delivery[],
  deliveredDeliveries: State.Models.FinishedDelivery[],
) => {
  const deliveryIds: string[] = Array.from(deliveries, d => d.id);
  const deliveredDeliveryIds: string[] = Array.from(
    deliveredDeliveries,
    dd => dd.deliveryId,
  );
  const undeliveredDeliveryIds = deliveryIds.filter(d =>
    deliveredDeliveryIds.includes(d),
  );

  return undeliveredDeliveryIds;
};

const getUndeliveredDeliveries = (
  deliveries: State.Models.Delivery[],
  deliveredDeliveries: State.Models.FinishedDelivery[],
): State.Models.Delivery[] => {
  return deliveries.filter(
    d =>
      !getUndeliveredDeliveryIds(deliveries, deliveredDeliveries).includes(
        d.id,
      ),
  );
};

const getDeliveredDeliveries = (
  deliveries: State.Models.Delivery[],
  deliveredDeliveries: State.Models.FinishedDelivery[],
): State.Models.Delivery[] => {
  return deliveries.filter(d =>
    getUndeliveredDeliveryIds(deliveries, deliveredDeliveries).includes(d.id),
  );
};

const isDelivered = (
  deliveredDeliveries: State.Models.FinishedDelivery[],
  deliveryId: string,
) => {
  return (
    deliveredDeliveries.filter(dd => dd.deliveryId === deliveryId)?.length > 0
  );
};

export {getUndeliveredDeliveries, getDeliveredDeliveries, isDelivered};
