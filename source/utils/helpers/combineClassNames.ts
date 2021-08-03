export const combineClassNames = (classNames: (string | null | undefined)[]): string => (
  classNames.filter((cl) => cl).join(' ')
);
