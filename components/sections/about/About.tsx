import profile from "../../../public/images/about/Profile_Picture.jpeg";
import Image from "next/image";
import { Text } from "../../atoms/Text";
import { Heading } from "../../atoms/Heading";

const About = () => {
  return (
    <div className="my-36 w-screen bg-black flex justify-center items-center">
      <div className=" relative h-3/4 w-1/3 mr-10">
        <Image
          src={profile}
          alt="Daniel Thiel Profile Picture"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="w-2/4">
        <Heading>Hello!</Heading>
        <Text color="white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut{" "}
          <span className="text-red-500">labore</span> et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </div>
    </div>
  );
};

export default About;
