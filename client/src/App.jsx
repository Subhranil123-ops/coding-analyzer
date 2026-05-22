import { useState, useEffect } from 'react'
import axios from "axios";

function App() {
  let [message, SetMessage] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {

        const res = await axios.get("http://localhost:3000/test", {
          signal: controller.signal
        }
        );

        SetMessage(res.data.message);

      }

      catch (error) {
        console.log(error);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    }

  }, []);

  return (
    <>
      <h1>{message}</h1>
    </>
  )
}

export default App
