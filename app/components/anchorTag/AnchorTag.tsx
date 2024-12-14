"use client";

const AnchorTag = ({ id }: { id: string }) => {
  return (
    <span id={id} style={{ position: "absolute", top: "0", zIndex: "-100" }}>
      {" "}
    </span>
  );
};

export default AnchorTag;
