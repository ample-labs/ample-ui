export const hideUnnecessaryControls = (
  props: string[] = [`as`, `forwardedAs`, `theme`, `ref`],
) => {
  return props.reduce(
    (prev, prop) => ({
      ...prev,
      [prop]: {
        table: {
          disable: true,
        },
      },
    }),
    {},
  );
};
