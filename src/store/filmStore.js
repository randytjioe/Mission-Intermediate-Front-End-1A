import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {
  fetchFilmsApi,
  addFilmApi,
  updateFilmApi,
  deleteFilmApi,
} from "../services/api/filmApi";

const useFilmsStore = create(
  devtools((set) => ({
    films: [],
    editingIndex: null,
    status: "idle", // 'loading', 'succeeded', 'failed'

    loadFilms: async () => {
      set({ status: "loading" });
      try {
        const response = await fetchFilmsApi();
        set({ films: response, status: "succeeded" });
      } catch (error) {
        set({ status: "failed" });
        console.error("Failed to fetch films:", error);
      }
    },

    addFilm: async (film) => {
      try {
        const response = await addFilmApi(film);
        set((state) => ({
          films: [...state.films, response.data],
        }));
      } catch (error) {
        console.error("Failed to add film:", error);
      }
    },

    updateFilm: async (updatedFilm) => {
      try {
        await updateFilmApi(updatedFilm);
        set((state) => ({
          films: state.films.map((film) =>
            film.id === updatedFilm.id ? updatedFilm : film
          ),
        }))
      
        
      } catch (error) {
        console.error("Failed to update film:", error);
      }
    },

    deleteFilm: async (id) => {
      try {
        await deleteFilmApi(id);
        set((state) => ({
          films: state.films.filter((film) => film.id !== id),
        }));
      } catch (error) {
        console.error("Failed to delete film:", error);
      }
    },

    setEditingIndex: (index) => set({ editingIndex: index }),
  }))
);

export default useFilmsStore;
