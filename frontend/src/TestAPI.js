import { useEffect } from "react";
import axios from "axios";

function TestAPI() {
  useEffect(() => {
    axios.get("https://avocat-backend.onrender.com/")
      .then((res) => {
        console.log("Réponse API :", res.data);
      })
      .catch((err) => {
        console.error("Erreur API :", err);
      });
  }, []);

  return <div>Appel API effectué (voir console)</div>;
}

export default TestAPI;
