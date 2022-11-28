import axios from "axios";

const serviceCallAPI = async (
  endpoint,
  method,
  data = null,
  id = null,
  token = null
) => {
  const base_url = process.env.REACT_APP_BASE_URL;
  const config = {
    method: method,
    headers: {
      Accept: "application/json",
      Authorization: token ? `Bearer ${token}` : null,
    },
    baseURL: base_url,
    url: id ? base_url + endpoint + id : base_url + endpoint,
    data: data,
  };
  const result = await axios(config);
  return result;
};

export default serviceCallAPI;
