export const getFiltered = (products1, products) => {
    const p = products1.filter((each) =>
      products.every((i) => each?._id !== i?._id)
    );

    return [...p, ...products];
  };