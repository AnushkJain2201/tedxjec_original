import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

// import TicketPage from "./pages/TicketPage";
import SpeakerPage from "./pages/speakerPages/TanjJain";
import TanjJain from "./pages/speakerPages/TanjJain";
import SudhirKumar from "./pages/speakerPages/SudhirKumar";
import Sampada from "./pages/speakerPages/Sampada";

function App() {
  return (
    <>
      <Routes>
        <Route  path="/" element={<Homepage />} ></Route>
        {/* <Route  path="/ticket" element={<TicketPage />} ></Route> */}
        <Route  path="/tanujain" element={<TanjJain />} ></Route>
        <Route  path="/sudhir" element={<SudhirKumar />} ></Route>
        <Route  path="/sampada" element={<Sampada />} ></Route>
        
        <Route  path="/speaker" element={<SpeakerPage />} ></Route>
      </Routes>
    </>
  )
}

export default App;
