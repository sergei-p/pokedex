import MainView from "./components/MainView"

function App() {
  return (
    <div>
      <header>
        <h1 className="header-title">Pokedex</h1>
      </header>
      <main>
        <MainView />
      </main>
      <footer>
        Pokedex Application
      </footer>
    </div>
  );
}

export default App;
