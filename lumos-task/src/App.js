import "./App.css";
import Header from "./component/header/Header";
import Home from "./modules/home/Home";
import HeaderMobile from "./component/header/HeaderMobile";
function App() {
  return (
    <div>
      {window.innerWidth > 768 ? <Header /> : <HeaderMobile />}
      <Home />
    </div>
  );
}

export default App;
