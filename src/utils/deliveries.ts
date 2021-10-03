import * as State from '../state';

/**
 * getUndeliveredDeliveryIds. Method to get the ids of all undelivered deliveries.
 * @param deliveries. A delivery array with all the driver deliveries.
 * @param deliveredDeliveries A finished delivery array with all the deliveries delivered by the driver.
 * @returns a string array with the ids of all the undelivered deliveries.
 */
const getUndeliveredDeliveryIds = (
  deliveries: State.Models.Delivery[],
  deliveredDeliveries: State.Models.FinishedDelivery[],
): string[] => {
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

/**
 * getUndeliveredDeliveries. Method to get all the undelivered driver deliveries.
 * @param deliveries. A delivery array with all the driver deliveries.
 * @param deliveredDeliveries A finished delivery array with all the deliveries delivered by the driver.
 * @returns a delivery array with all the undelivered deliveries.
 */
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

/**
 * getDeliveredDeliveries. Method to get all the delivered driver deliveries.
 * @param deliveries. A delivery array with all the driver deliveries.
 * @param deliveredDeliveries A finished delivery array with all the deliveries delivered by the driver.
 * @returns a delivery array with all the delivered deliveries.
 */
const getDeliveredDeliveries = (
  deliveries: State.Models.Delivery[],
  deliveredDeliveries: State.Models.FinishedDelivery[],
): State.Models.Delivery[] => {
  return deliveries.filter(d =>
    getUndeliveredDeliveryIds(deliveries, deliveredDeliveries).includes(d.id),
  );
};

/**
 * isDelivered. Method to check if a delivery is already delivered.
 * @param deliveredDeliveries A finished delivery array with all the deliveries delivered by the driver.
 * @param deliveryId The id of the delivery to check.
 * @returns a boolean representing if the delivery is delivered (true) or not (false).
 */
const isDelivered = (
  deliveredDeliveries: State.Models.FinishedDelivery[],
  deliveryId: string,
): boolean => {
  return (
    deliveredDeliveries.filter(dd => dd.deliveryId === deliveryId)?.length > 0
  );
};

export {getUndeliveredDeliveries, getDeliveredDeliveries, isDelivered};
