import Header from './components/Header/Header/Header.js'
import "@material-tailwind/react/tailwind.css";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./components/AppRouter"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
