import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [quote, setQuote] = useState("");

  const fetchApi = async () => {
    return await fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((result) => {
        const { advice } = result.slip; //destructuring
        setQuote(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return <div className="App">{quote}</div>;
}
