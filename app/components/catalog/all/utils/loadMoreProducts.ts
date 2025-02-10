import { IProduct } from "@/types";
import { toast, Zoom } from "react-toastify";

export const loadMoreProducts = async (
  filters: string,
  start?: number,
  end?: number
) => {
  try {
    const updateData = await fetch(
      `/api/products/some?start=${start || 0}&end=${end || 5}&${filters}`
    );

    const res = await updateData.json();

    if (res.statusText === "finished") {
      toast(`Вы просмотрели все товары данного типа`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });

      return "finished";
    }

    return res;
  } catch (error) {
    console.log(error);
    return [];
  }
};
