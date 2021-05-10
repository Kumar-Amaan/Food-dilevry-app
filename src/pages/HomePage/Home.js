import React from "react";
import { homeObjOne} from "./Data";
import { InfoSection } from "../../components";
import Pricing from "../../components/Pricing/Pricing";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Pricing />
      
    </>
  );
};

export default Home;
