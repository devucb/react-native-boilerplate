import {ELocaleStorageKeys} from '@enums';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItemToStorage = <T>(key: ELocaleStorageKeys, value: T) => {
  return AsyncStorage.setItem(key, JSON.stringify(value));
};

export const getItemFromStorage = async <T>(
  key: ELocaleStorageKeys,
  defaultValue?: T,
): Promise<T> => {
  const value = await AsyncStorage.getItem(key);
  return value ? JSON.parse(value) : defaultValue;
};

export const clearStorage = async () => {
  return AsyncStorage.clear();
};

export const removeItemFromStorage = async <T>(
  key: ELocaleStorageKeys,
): Promise<void> => {
  return AsyncStorage.removeItem(key);
};
