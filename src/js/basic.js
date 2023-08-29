export default function orderByProps(obj, arrKeys) {
  const arr = [];
  const arr1 = [];

  for (const prop in obj) {
    if (arrKeys.includes(prop)) {
      const index = arrKeys.indexOf(prop);
      arr.splice(index, 0, { key: prop, value: obj[prop] });
    } else arr1.push({ key: prop, value: obj[prop] });
  }
  arr1.sort((x, y) => x.key.localeCompare(y.key));

  return arr.concat(arr1);
}
