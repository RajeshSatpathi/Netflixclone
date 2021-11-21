import "./App.css";
import Banner from "./Banner";
import Navbar from "./Navbar";
import requests from "./requests";
import Row from "./Row";

function App() {
  return (
    <div>
      {/* Nav Component  */}
      <Navbar />
      {/* Banner Component   */}
      <Banner />

      <br />
      {/* row component  */}
      <Row
        title="NETFLIX ORIGINAL"
        fatchUrl={requests.netflixOriginal}
        isLargeRow
      />
      <Row title="Trending Now" fatchUrl={requests.fatchTrendingMovie} />
      <Row title="Top Rated" fatchUrl={requests.fatchTopRatedMovie} />
      <Row title="Popular " fatchUrl={requests.fatchPopular} />

      <Row title="Upcoming " fatchUrl={requests.fatchUpcomingMovie} />
      <Row title="Now Playing " fatchUrl={requests.fatchNowPlyaingMovie} />
    </div>
  );
}

export default App;
