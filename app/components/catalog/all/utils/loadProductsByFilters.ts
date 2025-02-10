export const loadProductsByFilters = async (filters: string) => {
  try {
    const newData = await fetch(
      `/api/products/some?start=${0}&end=${5}&${filters.toString()}`
    );

    const newProducts = await newData.json();

    return newProducts;
  } catch (error) {
    console.log(error);
  }
};
