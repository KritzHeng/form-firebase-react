import Information from "./components/Information";
import ShowData from "./components/ShowData";
import HeaderApp from "./nav/HeaderApp";
import './App.css';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <HeaderApp/>
      <Routes>
        <Route path="/" element={<ShowData />} />
        <Route path="/showdata" element={<ShowData />} />
        <Route path="/information" element={<Information />} />
      </Routes>
    </div>
  );
}

export default App;
