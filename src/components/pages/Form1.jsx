import { useContext } from "react";
import { useNavigate } from "react-router";
import { RegistrationContext } from "../context/RegistrationContext";
import "./style/foms.css";

export const Form1 = () => {
  const { name, age, dateOfBirth, dispatch } = useContext(RegistrationContext);

  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <input
          type="text"
          value={name}
          placeholder="Enter Your Name"
          onChange={(e) => {
            dispatch({ type: "NAME", payload: e.target.value });
          }}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter Your Age"
          value={age}
          onChange={(e) => {
            dispatch({ type: "AGE", payload: e.target.value });
          }}
        />{" "}
        <br />
        <input
          type="date"
          placeholder="Enter Your DateOfBirth"
          value={dateOfBirth}
          onChange={(e) => {
            dispatch({ type: "DATE_OF_BIRTH", payload: e.target.value });
          }}
        />{" "}
        <br />
        <button
          disabled={!name && !age && !dateOfBirth}
          onClick={() => {
            navigate("/registration/two");
          }}
          style={{
            background: "#000000",
            border: "transparent",
            padding: "8px 20px",
            borderRadius: "5px",
            color: "#ffffff",
            fontSize: "20px",
            fontWeight: "700",
            fontStyle: "italic",
          }}
        >
          NEXT
        </button>
      </div>
    </>
  );
};
