import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Main from "./components/Main";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Instructions />
        <Main />
      </div>
    </>
  );
}
