import {atom} from 'recoil';
import {Models} from '..';
import asyncStorageEffect from './effects/asyncStorageEffect';

const deliveredDeliveriesState = atom({
  key: 'deliveredDeliveries',
  default: [] as Models.FinishedDelivery[],
  effects_UNSTABLE: [asyncStorageEffect('deliveredDeliveries')],
});

export default deliveredDeliveriesState;
