/// Utils

export const wrapBase = (href: string): string =>
  `${import.meta.env.BASE_URL}${href}`.replace(/\/+$/, '');
