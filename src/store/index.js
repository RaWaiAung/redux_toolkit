import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, changeSearchTerm, addCar, removeCar } from "./slice/carsSlice";
import { formReducer, changeName, changeCost } from "./slice/formSlice"

const store = configureStore({
    reducer: {
        form: formReducer,
        cars: carsReducer
    }
});

export { store, changeName, changeCost, changeSearchTerm, addCar, removeCar } 