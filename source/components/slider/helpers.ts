export const numsToPercents = (curr: number, full: number): number => parseFloat(((curr / full) * 100).toFixed(2));

export const findClosestValueFromPercentage = (diffValue: number, currentPercentage: number): [number, number] => {
  const value = (diffValue / 100) * currentPercentage;
  const normalizedValue = Math.round(value);
  const normalizedPercentage = numsToPercents(normalizedValue, diffValue);

  return [normalizedValue, normalizedPercentage];
};

/*
 [1, 3, 5, 7, 9, 11]
 */
