import { useEffect } from "react";
import { Link } from "react-router-dom";
import useFilmsStore from "../store/filmStore";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function FilmPage() {
  const { films, loadFilms, status } = useFilmsStore();

  useEffect(() => {
    loadFilms();
  }, [loadFilms]);

  if (status === "loading") {
    return <div className="text-center py-10 text-lg">Loading...</div>;
  }

  if (status === "failed") {
    return (
      <div className="text-center py-10 text-lg text-red-500">
        Failed to load films.
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center">All Films</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {films.map((film) => (
            <div
              key={film.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform h-[365px] w-[234px] hover:scale-105"
            >
              <Link to={`/films/${film.id}`}>
                <img
                  src={film.imageUrl}
                  alt={film.title}
                  className=" object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl z-20 font-semibold truncate">
                    {film.title}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
