import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  CharacterList,
  Home,
  ListLocation,
  DetailCharacter,
  LocationDetail,
  CharacterByLocation,
  AssignLocationDetail,
} from "./pages";
export default function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/loclist" element={<ListLocation />} />
          <Route exact path="/charlist" element={<CharacterList />} />
          <Route exact path="/detailchar/:id" element={<DetailCharacter />} />
          <Route exact path="/locChar/:id" element={<LocationDetail />} />
          <Route exact path="/charbyloc" element={<CharacterByLocation />} />
          <Route
            exact
            path="/assigndetail/:id"
            element={<AssignLocationDetail />}
          />
        </Routes>
      </main>
    </Router>
  );
}
