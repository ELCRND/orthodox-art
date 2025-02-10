export const loadProductsByFilters = async (filters: string) => {
  try {
    const newData = await fetch(
      `/api/products/some?start=${0}&end=${5}&${filters.toString()}`
    );

    const res = await newData.json();
    if (res.statusText === "finished") {
      return [];
    }

    return res;
  } catch (error) {
    console.log(error);
  }
};
