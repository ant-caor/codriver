import {atom} from 'recoil';

const selectedDeliveryIdState = atom({
  key: 'selectedDeliveryId',
  default: '',
});

export default selectedDeliveryIdState;
