import Image from "next/image";

const GoogleBtn = ({ handleClick }: { handleClick: VoidFunction }) => {
  return (
    <button onClick={handleClick}>
      <span>
        <Image src={"/google.svg"} alt="google" width={22} height={22} />
      </span>
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleBtn;
