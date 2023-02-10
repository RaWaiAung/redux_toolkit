import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store";
function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm
  });

  const handleSearchTerm = (event) => {
    dispatch(changeSearchTerm(event.target.value))
  }
  return (
    <div className="list-header">
      <h3 className="title is-h3">My Car</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input is-expanded"
          value={searchTerm}
          onChange={handleSearchTerm}
          type="text"
        />
      </div>
    </div>
  );
}

export default CarSearch;
