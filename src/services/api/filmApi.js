
const API_BASE_URL = process.env.REACT_APP_API_URL;

const fetchJson = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
};

export const fetchFilmsApi = async () => {
  return await fetchJson(`${API_BASE_URL}/films`);
};

export const addFilmApi = async (film) => {
  return fetchJson(`${API_BASE_URL}/films`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(film),
  });
};

export const updateFilmApi = async (film) => {
  return fetchJson(`${API_BASE_URL}/films/${film.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(film),
  });
};

export const deleteFilmApi = async (id) => {
  return fetchJson(`${API_BASE_URL}/films/${id}`, {
    method: "DELETE",
  });
};
