import ContinueFilm from "../components/continueFilm";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import NewFilm from "../components/newFilm";
import TopRatingFilm from "../components/topRatingFilm";
import TrendingFilm from "../components/trendingFilm";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ContinueFilm />
      <TopRatingFilm />
      <TrendingFilm />
      <NewFilm />
      <Footer />
    </>
  );
}
