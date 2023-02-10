import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";
function CarList() {
  const dispatch = useDispatch();
  const {cars, name} = useSelector(({form, cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      cars: filteredCars,
      name: form.name
    }
  });
  const handleDelete = (car) => {
    dispatch(removeCar(car.id));
  };
  const renderedCar = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    console.log("bold is", bold)
    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button className="button is-danger" onClick={() => handleDelete(car)}>
          Delete
        </button>
      </div>
    );
  });
  console.log(cars);
  return (
    <div className="car-list">
      {renderedCar}
      <hr />
    </div>
  );
}

export default CarList;
