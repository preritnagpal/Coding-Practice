import {Routes, Route} from "react-router-dom";
import PropsPage from "./Components/Props/PropsPage";
import State from "./Components/State/StatePage";
import UsestateHook from "./Components/Hooks/hooksPage";
import FormPage from "./Components/Forms/form";
import { ThemeProvider } from "./Components/Hooks/useContext/themetoggle.tsx/ThemeContext";

function App(){
  return(
  <ThemeProvider>
    <Routes>
      <Route path="/props" element={<PropsPage />} />
      <Route path ="/state" element ={<State />} />
      <Route path ="/hooks" element ={<UsestateHook />} />
      <Route path ="/form" element ={<FormPage />} />
    </Routes>
  </ThemeProvider>
  );
  
}
export default App;