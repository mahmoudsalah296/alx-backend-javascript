export default function cleanSet(set, str) {
  const out = [];

  if (!set || !str || !(set instanceof Set) || typeof str !== 'string') {
    return '';
  }
  set.forEach((val) => {
    if (typeof val === 'string' && val.startsWith(str)) out.push(val.slice(str.length));
  });
  return out.join('-');
}
