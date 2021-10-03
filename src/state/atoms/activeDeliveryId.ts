import {atom} from 'recoil';
import asyncStorageEffect from './effects/asyncStorageEffect';

const activeDeliveryIdState = atom({
  key: 'activeDeliveryId',
  default: '',
  effects_UNSTABLE: [asyncStorageEffect('activeDeliveryId')],
});

export default activeDeliveryIdState;
