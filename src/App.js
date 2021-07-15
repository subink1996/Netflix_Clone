import "./App.css";
import Row from "./Components/Row";
import requests from "./Api/requests";
function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORGINALS" fetchUrl={requests.fetchNetflixOrginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
