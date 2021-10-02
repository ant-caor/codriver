import {atom} from 'recoil';
import {Models} from '..';

const deliveriesState = atom({
  key: 'deliveries',
  default: [] as Models.Delivery[],
});

export default deliveriesState;
