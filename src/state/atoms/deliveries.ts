import {atom} from 'recoil';
import {Models} from '..';
import asyncStorageEffect from './effects/asyncStorageEffect';

const deliveriesState = atom({
  key: 'deliveries',
  default: [] as Models.Delivery[],
  effects_UNSTABLE: [asyncStorageEffect('deliveries')],
});

export default deliveriesState;
