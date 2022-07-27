import Header from './components/Header'
import SearchArea from './components/SearchArea'
import ListGames from './components/ListGames'
import GamesData from "./data.json";
import Categories from "./category.json";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchArea data={GamesData} />
      <ListGames games={GamesData} categories={Categories} />
    </div>
  );
}

export default App;
