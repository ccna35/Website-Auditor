import { useEffect } from "react";
import "./App.css";

function App() {
  const handleCallBackResponse = (response) => {
    console.log(response.credentials);
  };
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "357600971087-ifjh5ga191qdgb224b8bln3iuj3mftns.apps.googleusercontent.com",
      callback: handleCallBackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInBtn"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div className="App">
      <div id="signInBtn"></div>
    </div>
  );
}

export default App;
