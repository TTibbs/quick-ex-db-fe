import Footer from "./components/Footer";
import Home from "./components/Home";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Home />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
