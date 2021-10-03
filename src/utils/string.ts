/**
 * stringIsEmpty. A method to check if a string is empty.
 * @param s a string to check if it is empty.
 * @returns whether the string is empty (true) or not (false).
 */
const stringIsEmpty = (s: string) => {
  if (s === undefined || s === null || s.replace(/\s/g, '') === '') {
    return true;
  }
  return false;
};

export {stringIsEmpty};
