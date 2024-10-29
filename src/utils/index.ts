/// Utils

export const wrapBase = (href: string): string =>
  `${import.meta.env.BASE_URL}${href}`.replace(/\/+$/, '');

export const range = (from: number, to: number, step: number = 1): number[] => {
  let ret: number[] = [];
  for (let i = from; i <= to; i += step) {
    ret.push(i);
  }
  return ret;
};
