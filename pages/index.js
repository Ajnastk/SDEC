import { useEffect, useState } from "react";
import App from "./_app";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Runs only on the client
  }, []);

  if (!isClient) return null; // Prevents rendering on the server

  return <App />;
}
