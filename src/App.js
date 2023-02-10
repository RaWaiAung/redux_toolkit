import React from "react";
import CarSearch from "./items/CarSearch";
import CarValue from "./items/CarValue";
import CarList from "./items/CarList";
import CarForm from "./items/CarForm";

function App() {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}

export default App;
