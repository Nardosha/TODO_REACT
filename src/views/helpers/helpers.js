export function getRandom() {
  const uniqueSet = new Set();

  const randomNumber = Math.floor(Math.random() * 1000);
  if (uniqueSet.has(randomNumber)) return getRandom();
  uniqueSet.add(randomNumber);
  return randomNumber;
}

export function session() {
  //
}