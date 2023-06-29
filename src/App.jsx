import { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import AppImages from "./components/appImages";
import Heading from "./components/subHeading";
import SubHeadingContainer from "./components/subHeading/subHeadingContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Hero />
      <AppImages />
      <Heading />
      <SubHeadingContainer />
      <SubHeadingContainer />
      <SubHeadingContainer />
    </div>
  );
}

export default App;
