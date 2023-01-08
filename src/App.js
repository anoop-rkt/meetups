import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetUpsPage from "./pages/AllMeetUps";
import Favourites from "./pages/Favourites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    
    <Layout>
   
      <Routes>
        <Route exact path="/" element={ <AllMeetUpsPage />} />
        <Route exact path="/new-meetups" element={ <NewMeetup/>} />
        <Route exact path="/favourites" element={ <Favourites/>} />
      </Routes>
    </Layout>
   );
}

export default App;
