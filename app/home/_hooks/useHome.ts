import { API_BASE_URL } from "@/config";
import { globalGetRequest } from "@/libs/axios/getRequest";
import { useQuery } from "@tanstack/react-query";
const useHome = () => {
  const getAllProducts = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      globalGetRequest({
        url: `${API_BASE_URL}/products`,
      }),
  });
  const getAllProductsCategories = useQuery({
    queryKey: ["product-categories"],
    queryFn: () =>
      globalGetRequest({
        url: `${API_BASE_URL}/products/categories`,
      }),
  });
  return { queries: { getAllProducts, getAllProductsCategories } };
};

export default useHome;
