
import useFilmsStore from "../store/filmStore";
const useFilms = () => {
   
  const {
    films,
    editingIndex,
    status,
    loadFilms,
    addFilm,
    updateFilm,
    deleteFilm,
    setEditingIndex,
  } = useFilmsStore();

  return {
    films,
    editingIndex,
    status,
    loadFilms,
    addFilm,
    updateFilm,
    deleteFilm,
    setEditingIndex,
  };
};

export default useFilms;
