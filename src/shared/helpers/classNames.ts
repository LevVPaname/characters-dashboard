type ClassValue = string | false | null | undefined | Record<string, boolean>;

export const classNames = (...classes: ClassValue[]): string => {
  const result: string[] = [];

  classes.forEach((item) => {
    if (!item) return;

    if (typeof item === 'string') {
      result.push(item);
      return;
    }

    Object.entries(item).forEach(([className, condition]) => {
      if (condition) {
        result.push(className);
      }
    });
  });

  return result.join(' ');
};
