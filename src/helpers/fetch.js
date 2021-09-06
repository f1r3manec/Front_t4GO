const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const fetchApi = (endopint, data, method = "GET") => {
  const url = `${baseUrl}${endopint}`;
  console.log(url);
  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
  }
};
