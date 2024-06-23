export const updateSearchParams = (
  params: string,
  param: string,
  value: string,
) => {
  const updated = new URLSearchParams(params);

  // updateSearchParams.set(param,value )
};

export const delayPromise = async (second = 1) => {
  await new Promise((resolve) => setTimeout(resolve, 15 * 1000));
};
