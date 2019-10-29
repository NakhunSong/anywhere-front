import { IMemoState } from 'reducers/memo';

/**
 * Get data from localStorage item named by itemName
 */
export const getItem = (itemName: string): IMemoState[] => {
  let result = (global as any).localStorage.getItem(itemName);
  result = result ? JSON.parse(result) : [];
  return result;
};

/**
 * Push data to localStorage item named by itemName
 */
export const pushItem = (itemName: string, object: IMemoState): void => {
  let list: IMemoState[] = [];
  const getLocal = getItem(itemName);
  if (getLocal) {
    list = getLocal;
  }
  list.push(object);
  (global as any).localStorage.setItem(itemName, JSON.stringify(list));
};

/**
 * Set data to localStorage item named by itemName
 */
export const setItem = (itemName: string, object: IMemoState[]): void => {
  const list: IMemoState[] = object || [];
  (global as any).localStorage.setItem(itemName, JSON.stringify(list));
};

/**
 * Get next memo id
 */
export const getNextId = (itemName: string): number => {
  let list = (global as any).localStorage.getItem(itemName);
  list = list ? JSON.parse(list) : [];
  return list.length > 0 ? list[list.length - 1].id + 1 : 0;
};
