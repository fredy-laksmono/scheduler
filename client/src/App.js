import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";

function App() {
  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "923679615869-l9euu3empp1hf1e01vvtdl57n1r0mg0g.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large"
    });
  }, []);
  return (
    <div className="App">
      <div id="signInDiv"></div>
    </div>
  );
}

export default App;
