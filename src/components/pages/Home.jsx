import { useEffect, useState } from "react";
import axios from "axios";
import { Userdetail } from "./Userdetail";

export const Home = () => {
  const [arr, setArr] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:3001/users")
      .then((res) => setArr(res.data))
      .catch((e) => console.log(e));
  };

  //   getData();
  useEffect(() => {
    getData();
  }, []);
  //console.log(arr);
  return (
    <>
      <div>
        {arr.map((e) => {
          return (
            <Userdetail
              key={e.id}
              name={e.name}
              age={e.age}
              date={e.dateOfBirth}
              state={e.stateOfResidence}
              address={e.address}
              pincode={e.pincode}
            ></Userdetail>
          );
        })}
      </div>
    </>
  );
};
