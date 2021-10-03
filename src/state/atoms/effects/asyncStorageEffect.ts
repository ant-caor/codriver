import {AtomEffect, DefaultValue} from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * asyncStorageEffect. This effect works similary to react useEffect hook.
 * We use it to mantain in sync async storage and the information that we get from the server.
 * @param key The key that we use to set and get a value in async storage (key - value).
 * @returns An effect that we can use with an specific recoil atom to persist our recoil state.
 */
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
