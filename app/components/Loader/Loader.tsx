import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div>
      <Image src={"/loader.png"} alt="loader" width={20} height={20} />
      123
    </div>
  );
};

export default Loader;
