import React, { createContext, useReducer, ReactNode } from 'react';

interface Car {
    id: number;
    name: string;
    price: string;
    image: string;
    startRent: string;
    finishRent: string;
    createdAt: string;
    updatedAt: string;
}

type CarState = {
  cars: Car[];
};

type CarAction = 
  | { type: 'SET_CARS', payload: Car[] }
  | { type: 'ADD_CAR', payload: Car }
  | { type: 'UPDATE_CAR', payload: Car }
  | { type: 'DELETE_CAR', payload: number };

const initialState: CarState = {
  cars: [],
};

const CarContext = createContext<{ state: CarState; dispatch: React.Dispatch<CarAction> }>({
  state: initialState,
  dispatch: () => undefined,
});

const carReducer = (state: CarState, action: CarAction): CarState => {
  switch (action.type) {
    case 'SET_CARS':
      return { ...state, cars: action.payload };
    case 'ADD_CAR':
      return { ...state, cars: [...state.cars, action.payload] };
    case 'UPDATE_CAR':
      return {
        ...state,
        cars: state.cars.map(car => (car.id === action.payload.id ? action.payload : car)),
      };
    case 'DELETE_CAR':
      return {
        ...state,
        cars: state.cars.filter(car => car.id !== action.payload),
      };
    default:
      return state;
  }
};

const CarProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(carReducer, initialState);

  return (
    <CarContext.Provider value={{ state, dispatch }}>
      {children}
    </CarContext.Provider>
  );
};

export { CarContext, CarProvider };
