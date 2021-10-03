import {AtomEffect, DefaultValue} from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

const asyncStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({setSelf, onSet}) => {
    AsyncStorage.getItem(key).then(savedValue => {
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
    });

    onSet(newValue => {
      if (newValue instanceof DefaultValue) {
        AsyncStorage.removeItem(key);
      } else {
        AsyncStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };

export default asyncStorageEffect;
