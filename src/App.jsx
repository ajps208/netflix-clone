
import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import Rows from './Components/Rows';
import requests from './request';
function App() {
  return (
   <div>
    <Navbar/>
     <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Rows isPoster={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Rows title="Trending in India" fetchUrl={requests.fetchTrending}/>
      <Rows title="Toprated Movies" fetchUrl={requests.fetchTopRated}/>
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
   </div>
  );
}

export default App;
