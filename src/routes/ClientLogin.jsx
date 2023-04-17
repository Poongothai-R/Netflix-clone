import { Route, Routes } from "react-router-dom";
import DisplayPage from "../pages/client/DisplayPage";
import PlayVideo from "../pages/shared/PlayVideo";

export default function ClientLogin() {
  return (
    <Routes>
      <Route path="/" element={<DisplayPage />} />
      <Route path="/:category" element={<DisplayPage />} />
      <Route path="/:category/:title" element={<PlayVideo />} />
      {/* same as admin */}
      <Route
        path="/:category/:title/:season/:episode"
        element={<PlayVideo />}
      />
    </Routes>
  );
}
