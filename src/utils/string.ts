const stringIsEmpty = (s: string) => {
  if (s === undefined || s === null || s.replace(/\s/g, '') === '') {
    return true;
  }
  return false;
};

export {stringIsEmpty};
