import { Route, Routes } from "react-router-dom";
import Category from "../pages/admin/Category";
import Seasons from "../pages/admin/Seasons";
import ContentManager from "../pages/admin/ContentManager";
import Episode from "../pages/admin/Epsisode";
import PlayVideo from "../pages/shared/PlayVideo";

export default function AdminLogin() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ContentManager />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/tvshows/:showname" element={<Seasons />} />
        <Route path="/tvshows/:showname/:season" element={<Episode />} />
        <Route path="/:category/:title" element={<PlayVideo />} />
        {/* nesting -1 this goes to the next line you dont need to hacve season episode and 2 playvideo pages */}
        <Route
          path="/:category/:title/:season/:episode"
          element={<PlayVideo />}
        />
      </Routes>
    </div>
  );
}
