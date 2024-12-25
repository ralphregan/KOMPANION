import ClientHeader from "./ClientHeader";
import { Sun, Calendar, BookOpen, StickyNote, ArrowRight } from "lucide-react";
import CardComponent from "./CardComponent";
import Stats from "./Stats";
import { useReducer, useState } from "react";
import LoginCom from "../Day/LoginCom";
import FormCOmp from "../Day/Form";
import SendRegister from "../Day/SendLoginAndRegister";

const initialValue = {
  status: "",
  Data: null,
  hasSent: false,
  isLoading: false,
  data: null,
  error: null
};
function reducer(state, action) {
  switch (action.type) {
    case "register":
      return {
        ...state,
        status: "Register",
      };
    case "exitRegister":
      return {
        ...state,
        status: "exitRegister",
      };
    case "RegisterData":
      return {
        ...state,
        Data: { register: action.payload },
        status: "dataReceived",
      };
    case "login":
      return {
        ...state,
        status: "Login",
      };

    case "LoginData":
      return {
        ...state,
        Data: { login: action.payload },
        status: "LoginActive",
      };
    case "SEND_START":
      return { ...state, hasSent: true, isLoading: true, error: null };
    case "SEND_SUCCESS":
      return {
        ...state,
        hasSent: true,
        isLoading: false,
        data: action.payload,
      };
    case "SEND_FAILURE":
      return {
        ...state,
        hasSent: true,
        isLoading: false,
        error: action.payload,
      };
      case "LOGIN_APPROVED":
        return {
          ...state,
          status : "loginSuccess",
        }
    case "RESET":
      return { ...state, hasSent: false, isLoading: false, error: null };
    default:
      throw new Error("unkniwn action")
   
  }
}

function ClientLandingPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [{ status, Data, hasSent }, dispatch] = useReducer(
    reducer,
    initialValue
  );

  function handleDarkMode() {
    setDarkMode((prev) => !prev);
  }
  return (
    <div className={`${darkMode ? "bg-zinc-950 " : "bg-yellow-50"}`}>
      <ClientHeader
        darkMode={darkMode}
        onclick={handleDarkMode}
        dispatch={dispatch}
      />
      {status === "Register" && (
        <LoginCom dispatch={dispatch}>
          {" "}
          <FormCOmp
            typeOfForm="register"
            dispatch={dispatch}
            dataType="RegisterData"
          />{" "}
        </LoginCom>
      )}
      {status === "Login" && (
        <LoginCom dispatch={dispatch}>
          {" "}
          <FormCOmp
            typeOfForm="login"
            dispatch={dispatch}
            dataType="LoginData"
          />{" "}
        </LoginCom>
      )}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CardComponent
            Op1={Sun}
            Op2={ArrowRight}
            pTxt="Real-time weather updates and accurate forecasts for your location"
            h3Txt="Weather Forecast"
            textColor="text-orange-600"
            BG="bg-orange-100"
            darkMode={darkMode}
          />
          <CardComponent
            Op1={Calendar}
            Op2={ArrowRight}
            pTxt="Organize your schedule with our intuitive calendar interface."
            h3Txt="Smart Calendar"
            BG="bg-sky-200"
            textColor="text-sky-600"
            darkMode={darkMode}
          />
          <CardComponent
            Op1={StickyNote}
            Op2={ArrowRight}
            pTxt="Capture your thoughts and ideas with our powerful note-taking tools."
            h3Txt="Quick Notes"
            textColor="text-yellow-600"
            BG="bg-yellow-100"
            darkMode={darkMode}
          />
          <CardComponent
            Op1={BookOpen}
            Op2={ArrowRight}
            pTxt="Stay informed with curated articles from other users around the world and get a distraction-free reading experience"
            h3Txt="Article Reader"
            textColor="text-purple-600"
            BG="bg-purple-100"
            darkMode={darkMode}
          />
        </div>
      </div>
      <div className={` ${darkMode ? "bg-blue-950" : "bg-white "}  py-16 `}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Stats
              textColor="text-sky-600"
              p="Active Users"
              h4="10+"
              darkMode={darkMode}
            />
            <Stats
              textColor="text-green-600"
              p="Events Scheduled"
              h4="50+"
              darkMode={darkMode}
            />
            <Stats
              textColor="text-yellow-600"
              p="Notes Created "
              h4="100+"
              darkMode={darkMode}
            />
            <Stats
              textColor="text-purple-600"
              p="Articles Read"
              h4="50+"
              darkMode={darkMode}
            />
          </div>
        </div>
      </div>
      {(status === "dataReceived" || status === "LoginActive") && (<SendRegister Data={Data} dispatch={dispatch} hasSent={hasSent} /> ) }

    </div>
  );
}

export default ClientLandingPage;
