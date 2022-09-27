import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BaseScreen from "./pages/BaseScreen";
import LoginScreen from "./pages/LoginScreen";
import LandingScreen from "./pages/LandingScreen";
import AccountScreen from "./pages/AccountScreen";
import ArticleScreen from "./pages/ArticleScreen";
import TagScreen from "./pages/TagScreen";
import ThemeScreen from "./pages/ThemeScreen";
import TagDetailScreen from "./pages/TagDetailScreen";
import ThemeDetailScreen from "./pages/ThemeDetailScreen";
import AccountDetailScreen from "./pages/AccountDetailScreen";
import ArticleDetailScreen from "./pages/ArticleDetailScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseScreen />}>
        <Route index element={<LandingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/accounts" element={<AccountScreen />} />
        <Route path="/articles" element={<ArticleScreen />} />
        <Route path="/tags" element={<TagScreen/>} />
        <Route path="/themes" element={<ThemeScreen />} />
        <Route path="/tag/:id" element={<TagDetailScreen />}/>
        <Route path= "/theme/:id" element={<ThemeDetailScreen/>}/>
        <Route path= "/account/:id" element={<AccountDetailScreen/>}/>
        <Route path= "/article/:id" element={<ArticleDetailScreen/>}/>
        <Route path="*" element={<h1> 404 not found </h1>} />
      </Route>
    </Routes>
  );
}
export default App;
