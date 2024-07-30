import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFilmsStore from '../store/filmStore';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function DetailPage() {
  const { id } = useParams();
  const { films, loadFilms, status } = useFilmsStore();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    loadFilms();
  }, [loadFilms]);

  

  useEffect(() => {
    if (status === 'succeeded') {
      const selectedFilm = films.find((f) => f.id === id);
      console.log("ini selected  film",selectedFilm)
      setFilm(selectedFilm);
    }
  }, [films, id, status]);
  console.log("ini film",films);
  console.log(id)

  if (status === 'loading') {
    return <div className="text-center py-10 text-lg">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="text-center py-10 text-lg text-red-500">Failed to load film details.</div>;
  }

  if (!film) {
    return <div className="text-center py-10 text-lg">Film not found.</div>;
  }

  return (
    <>
    <Navbar />
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">{film.title}</h1>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={film.imageUrl} alt={film.title} className="w-full h-96 w-25 object-cover" />
        <div className="p-6">
          <p className="text-lg mb-4">{film.description}</p>
          <p className="text-lg mb-2"><strong>Release Date:</strong> {film.releaseDate}</p>
          <p className="text-lg"><strong>Rating:</strong> {film.rating}</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
