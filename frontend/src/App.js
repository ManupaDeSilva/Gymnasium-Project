import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import LogInPage from "./pages/LogInPage";
import Regitration from "./pages/Regitration";
import OutdoorFacilities from "./pages/OutdoorFacilities";
import Payment from "./pages/Payment";
import PaymentReceipt from "./pages/PaymentReceipt";
import Sports from "./pages/Sports";
import EventShedule from "./pages/EventShedule";
import IndoorFacilities from "./pages/IndoorFacilities";
import UserProfile from "./pages/UserProfile";
import AboutUs from "./pages/AboutUs";
import SpecialProgramms from "./pages/SpecialProgramms";
import MusicalEvents from "./pages/MusicalEvents";
import SportsEvents from "./pages/SportsEvents";
import EquipmentBookingPage from "./pages/EquipmentBookingPage";
import DailyPractices from "./pages/DailyPractices";
import FacilityBookingPage from "./pages/FacilityBookingPage";
import Bascketball from "./pages/Bascketball";
import Badminton from "./pages/Badminton";
import Carrom from "./pages/Carrom";
import Chess from "./pages/Chess";
import Cricket from "./pages/Cricket";
import Elle from "./pages/Elle";
import Football from "./pages/Football";
import Hockey from "./pages/Hockey";
import Netball from "./pages/Netball";
import Tabletennis from "./pages/Tabletennis";
import Tennis from "./pages/Tennis";
import Volleyball from "./pages/Volleyball";
import Rugby from "./pages/Rugby";
import Wrestling from "./pages/Wrestling";
import Kickboxing from "./pages/Kickboxing";
import Taekwondo from "./pages/Taekwondo";
import Weightlifting from "./pages/Weightlifting";
import Swimming from "./pages/Swimming";
import TracksFileds from "./pages/TracksFileds";
import Karate from "./pages/Karate";
import Baseball from "./pages/Baseball";
import Homepage2 from "./pages/Homepage2";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/Homepage2":
        title = "";
        metaDescription = "";
      break;
      case "/loginpage":
        title = "";
        metaDescription = "";
        break;
      case "/regitration":
        title = "";
        metaDescription = "";
        break;
      case "/outdoorfacilities":
        title = "";
        metaDescription = "";
        break;
      case "/payment":
        title = "";
        metaDescription = "";
        break;
      case "/paymentreceipt":
        title = "";
        metaDescription = "";
        break;
      case "/sports":
        title = "";
        metaDescription = "";
        break;
      case "/eventshedule":
        title = "";
        metaDescription = "";
        break;
      case "/indoorfacilities":
        title = "";
        metaDescription = "";
        break;
      case "/userprofile":
        title = "";
        metaDescription = "";
        break;
      case "/aboutus":
        title = "";
        metaDescription = "";
        break;
      case "/special-programms":
        title = "";
        metaDescription = "";
        break;
      case "/musical-events":
        title = "";
        metaDescription = "";
        break;
      case "/sportsevents":
        title = "";
        metaDescription = "";
        break;
      case "/equipmentbookingpage":
        title = "";
        metaDescription = "";
        break;
      case "/dailypractices":
        title = "";
        metaDescription = "";
        break;
      case "/facilitybookingpage":
        title = "";
        metaDescription = "";
        break;
      case "/bascketball":
        title = "";
        metaDescription = "";
        break;
      case "/badminton":
        title = "";
        metaDescription = "";
        break;
      case "/carrom":
        title = "";
        metaDescription = "";
        break;
      case "/chess":
        title = "";
        metaDescription = "";
        break;
      case "/cricket":
        title = "";
        metaDescription = "";
        break;
      case "/elle":
        title = "";
        metaDescription = "";
        break;
      case "/football":
        title = "";
        metaDescription = "";
        break;
      case "/hockey":
        title = "";
        metaDescription = "";
        break;
      case "/netball":
        title = "";
        metaDescription = "";
        break;
      case "/tabletennis":
        title = "";
        metaDescription = "";
        break;
      case "/tennis":
        title = "";
        metaDescription = "";
        break;
      case "/volleyball":
        title = "";
        metaDescription = "";
        break;
      case "/rugby":
        title = "";
        metaDescription = "";
        break;
      case "/wrestling":
        title = "";
        metaDescription = "";
        break;
      case "/kickboxing":
        title = "";
        metaDescription = "";
        break;
      case "/taekwondo":
        title = "";
        metaDescription = "";
        break;
      case "/weightlifting":
        title = "";
        metaDescription = "";
        break;
      case "/swimming":
        title = "";
        metaDescription = "";
        break;
      case "/tracksfileds":
        title = "";
        metaDescription = "";
        break;
      case "/karate":
        title = "";
        metaDescription = "";
        break;
      case "/baseball":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Homepage2" element={<Homepage2 />} />
      <Route path="/loginpage" element={<LogInPage />} />
      <Route path="/regitration" element={<Regitration />} />
      <Route path="/outdoorfacilities" element={<OutdoorFacilities />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/paymentreceipt" element={<PaymentReceipt />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/eventshedule" element={<EventShedule />} />
      <Route path="/indoorfacilities" element={<IndoorFacilities />} />
      <Route path="/userprofile" element={<UserProfile />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/special-programms" element={<SpecialProgramms />} />
      <Route path="/musical-events" element={<MusicalEvents />} />
      <Route path="/sportsevents" element={<SportsEvents />} />
      <Route path="/equipmentbookingpage" element={<EquipmentBookingPage />} />
      <Route path="/dailypractices" element={<DailyPractices />} />
      <Route path="/facilitybookingpage" element={<FacilityBookingPage />} />
      <Route path="/bascketball" element={<Bascketball />} />
      <Route path="/badminton" element={<Badminton />} />
      <Route path="/carrom" element={<Carrom />} />
      <Route path="/chess" element={<Chess />} />
      <Route path="/cricket" element={<Cricket />} />
      <Route path="/elle" element={<Elle />} />
      <Route path="/football" element={<Football />} />
      <Route path="/hockey" element={<Hockey />} />
      <Route path="/netball" element={<Netball />} />
      <Route path="/tabletennis" element={<Tabletennis />} />
      <Route path="/tennis" element={<Tennis />} />
      <Route path="/volleyball" element={<Volleyball />} />
      <Route path="/rugby" element={<Rugby />} />
      <Route path="/wrestling" element={<Wrestling />} />
      <Route path="/kickboxing" element={<Kickboxing />} />
      <Route path="/taekwondo" element={<Taekwondo />} />
      <Route path="/weightlifting" element={<Weightlifting />} />
      <Route path="/swimming" element={<Swimming />} />
      <Route path="/tracksfileds" element={<TracksFileds />} />
      <Route path="/karate" element={<Karate />} />
      <Route path="/baseball" element={<Baseball />} />
    </Routes>
  );
}
export default App;
