export const areCorrespondingFieldValuesSame = (
  array1: Array<any>,
  array2: Array<any>,
  ...fields: Array<any>
) => {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    for (const field of fields) {
      if (array1[i][field] !== array2[i][field]) {
        return false;
      }
    }
  }

  return true;
};
