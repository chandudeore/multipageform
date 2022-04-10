import { useContext } from "react";
import { Navigate } from "react-router";
import { RegistrationContext } from "../context/RegistrationContext";
import "./style/foms.css";

export const Form2 = () => {
  const {
    dispatch,
    stateOfResidence,
    address,
    pincode,
    name,
    age,
    dateOfBirth,
    handleSubmit,
  } = useContext(RegistrationContext);

  if (!name || !age || !dateOfBirth) {
    return <Navigate to="/registration/one" />;
  }

  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Enter Your State Of Residence"
          value={stateOfResidence}
          onChange={(e) => {
            dispatch({ type: "STATE_OF_RESIDENCE", payload: e.target.value });
          }}
        />
        <br />
        <input
          type="text"
          value={address}
          placeholder="Enter Your Address"
          onChange={(e) => {
            dispatch({ type: "ADDRESS", payload: e.target.value });
          }}
        />
        <br />
        <input
          type="text"
          value={pincode}
          placeholder="Enter Your Pincode"
          onChange={(e) => {
            dispatch({ type: "PINCODE", payload: e.target.value });
          }}
        />
        <br />
        <button
          disabled={
            !stateOfResidence ||
            !address ||
            !pincode ||
            !name ||
            !age ||
            !dateOfBirth
          }
          style={{
            color: "#ffffff",
            background: "#0f1f1f",
            border: "transparent",
            padding: "8px 20px",
            borderRadius: "8px",
            fontSize: "20px",
            fontStyle: "italic",
            fontWeight: "700",
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
};
