import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div
        style={{
          border: "1px solid #000",
          padding: "10px 0px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              fontStyle: "italic",
              color: "#090909",
            }}
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            to={"/registration/one"}
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              fontStyle: "italic",
              color: "#090909",
            }}
          >
            Form1
          </Link>
        </div>
        <div>
          <Link
            to={"/registration/two"}
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              fontStyle: "italic",
              color: "#090909",
            }}
          >
            Form2
          </Link>
        </div>
      </div>
    </>
  );
};
