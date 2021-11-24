import axios from "axios";
import { useQuery } from "react-query";

const URL = `https://6160f807faa03600179fbbe0.mockapi.io/data`;

export const useGetData = () => {
  const fetchData = async () => {
    return await axios.get(`${URL}`, {}).then((res) => res.data);
  };

  return useQuery(["useGetData", {}], fetchData);
};
