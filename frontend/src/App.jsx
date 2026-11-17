import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Connecting to MediRoute backend...");

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Backend connection error:", error);
        setMessage("Unable to connect to backend.");
      });
  }, []);

  return (
    <div>
      <h1>MediRoute</h1>
      <h2>AI Emergency Hospital Recommendation System</h2>
      <p>{message}</p>
    </div>
  );
}

export default App;