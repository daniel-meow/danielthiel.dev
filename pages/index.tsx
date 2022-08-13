import { useEffect } from "react";
import type { NextPage } from "next";
import { Text } from "../components/atoms/Text";
const Home: NextPage = () => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--vh",
      window.innerHeight * 0.01 + "px"
    );
  });
  return (
    <>
      <div className="p-8 h-screen w-screen bg-rose-900 flex flex-col justify-between">
        <div className="flex justify-end items-start">
          <Text color="white">Daniel Thiel. Front End Developer.</Text>
        </div>
        <div className="flex justify-start items-end">
          <Text color="white">Under construction.</Text>
        </div>
      </div>
    </>
  );
};

export default Home;
