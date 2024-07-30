import ContinueFilm from "../components/continueFilm";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import NewFilm from "../components/newFilm";
import TopRatingFilm from "../components/topRatingFilm";
import TrendingFilm from "../components/trendingFilm";

export default function Home() {
  const images_trendingFilm = [
    {
      src: "/assets/tren_1.png",
    },
    {
      src: "/assets/tren_2.png",
    },
    {
      src: "/assets/tren_3.png",
    },
    {
      src: "/assets/tren_4.png",
    },
    {
      src: "/assets/tren_5.png",
    },
  ];
  const images_topRatingFilm = [
    {
      id: 1,
      src: "/assets/top_1.jpg",
      new: true,
      popOver: "/assets/top_p_1.png",
    },
    {
      id: 2,
      src: "/assets/top_2.jpg",
      popOver: "/assets/top_p_2.png",
    },
    {
      id: 3,
      src: "/assets/top_3.jpg",
      popOver: "/assets/top_p_3.png",
    },
    {
      id: 4,
      src: "/assets/top_4.jpg",
      new: true,
      popOver: "/assets/top_p_4.png",
    },
    {
      id: 5,
      src: "/assets/top_5.jpg",
      popOver: "/assets/top_p_5.png",
    },
  ];
  const images_continueFilm = [
    {
      name: "Dont't Look Up",
      src: "/assets/continue_1.jpg",
      rating: "4.5",
    },
    {
      name: "Dont't Look Up",
      src: "/assets/continue_2.jpg",
      rating: "4.5",
    },
    {
      name: "Dont't Look Up",
      src: "/assets/continue_3.jpg",
      rating: "4.5",
    },
    {
      name: "Dont't Look Up",
      src: "/assets/continue_4.jpg",
      rating: "4.5",
    },
  ];
  const images_newFilm = [
    {
      src: "/assets/new_1.png",
      label: "top",
    },
    {
      src: "/assets/new_2.png",
      label: "new",
    },
    {
      src: "/assets/new_3.png",
      label: "top",
    },
    {
      src: "/assets/new_4.png",
      label: "new",
    },
    {
      src: "/assets/new_5.png",
      label: "",
    },
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <ContinueFilm images={images_continueFilm} />
      <TopRatingFilm images={images_topRatingFilm} />
      <TrendingFilm images = {images_trendingFilm} />
      <NewFilm images={images_newFilm}/>
      <Footer />
    </>
  );
}
