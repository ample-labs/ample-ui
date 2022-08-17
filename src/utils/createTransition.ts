type CreateTransition = (
  props?: string[],
  duration?: string,
  easing?: string,
) => string;

const createTransition: CreateTransition = (
  props = [`all`],
  duration = `0.25s`,
  easing = `cubic-bezier(0.4, 0, 0.2, 1)`,
) => {
  return props
    .map((animatedProp) => `${animatedProp} ${duration} ${easing}`)
    .join(`,`);
};

export default createTransition;
