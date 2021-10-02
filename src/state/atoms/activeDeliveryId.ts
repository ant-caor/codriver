import {atom} from 'recoil';

const activeDeliveryIdState = atom({
  key: 'activeDeliveryId',
  default: '',
});

export default activeDeliveryIdState;
