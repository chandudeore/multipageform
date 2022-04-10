import React, { createContext, useEffect, useReducer } from "react";

export const RegistrationContext = createContext();

const initialState = {
  name: "",
  age: "",
  dateOfBirth: "",
  stateOfResidence: "",
  address: "",
  pincode: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };
    case "AGE":
      return { ...state, age: action.payload };
    case "DATE_OF_BIRTH":
      return { ...state, dateOfBirth: action.payload };
    case "STATE_OF_RESIDENCE":
      return { ...state, stateOfResidence: action.payload };
    case "ADDRESS":
      return { ...state, address: action.payload };
    case "PINCODE":
      return { ...state, pincode: action.payload };
    default:
      throw new Error();
  }
};

export const RegistrationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = () => {
    fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    //console.log(state);
  }, [state]);

  const { name, age, dateOfBirth, stateOfResidence, address, pincode } = state;

  return (
    <RegistrationContext.Provider
      value={{
        name,
        age,
        dateOfBirth,
        stateOfResidence,
        address,
        pincode,
        dispatch,
        handleSubmit,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};
