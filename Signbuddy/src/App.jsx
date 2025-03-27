import { Routes, Route, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Recording from "./components/Recording";
import HowToUse from "./components/HowToUse";
import SignToVoice from "./components/SignToVoice";
import SpeechToSign from "./components/SpeechToSign";
import Newapp from "./components/Newapp";

//service id:service_xzgs5vk
//template_id:template_5ob59ol
//public key=CQIzSTEgIMg6OUOki
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/recording' element={<Recording/>} />
        <Route path="/howtouse" element={<HowToUse/>} />
        <Route path="/langDetection" element={<SignToVoice/>} />

        <Route path="/voicetosign" element={<SpeechToSign />} />
        <Route path="/newapp" element={<Newapp />} />

      </Routes>
    </div>
  );
};

export default App;