// import "./App.css";
// import { SignupLogin } from "./Components/LoginSignup/SignupLogin";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
import Grid from "./Components/Grid";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/get")
      .then((res) => {
        console.log(res.data);
        setPhotos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <Navbar />
      <Grid photos={photos} />
      <Button />
    </div>
  );
}

export default App;
