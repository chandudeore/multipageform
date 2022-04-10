import "./style/detail.css";

export const Userdetail = ({ name, age, date, state, address, pincode }) => {
  return (
    <>
      <tbody style={{ border: "1px solid #000" }}>
        <tr>
          <td style={{ padding: "10px" }}>{name}</td>
          <td style={{ padding: "10px" }}>{age}</td>
          <td style={{ padding: "10px" }}>{date}</td>
          <td style={{ padding: "10px" }}>{state}</td>
          <td style={{ padding: "10px" }}>{address}</td>
          <td style={{ padding: "10px" }}></td>
        </tr>
      </tbody>
    </>
  );
};
