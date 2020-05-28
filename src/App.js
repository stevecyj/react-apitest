import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const apis = [
  "http://laravelgcp.crud.nctu.me/api",
  "http://codeignitergcp.crud.nctu.me/api",
  "http://symfonygcp.crud.nctu.me/api",
];

export default function App() {
  const [response, setResponse] = useState("");
  const onChange = async (e) => {
    const url = e.target.value;
    const data = await axios.get(url);
    setResponse(JSON.stringify(data, null, 2));
  };

  return (
    <div className="App">
      <select onChange={onChange} style={{ marginTop: 10 }}>
        <option key={-1}>Choose API</option>
        {apis.map((api) => (
          <option key={api}>{api}</option>
        ))}
      </select>
      <hr />
      Response:
      <pre style={{ textAlign: "left" }}>{response}</pre>
    </div>
  );
}
