"use client";
import Image from "next/image";
import GalleryDesktop from "./galleryDesktop/GalleryDesktop";
import { useWindowSize } from "@/app/hooks/useWindowSize";
import GalleryMobile from "./galleryMobile/GalleryMobile";

type Image = {
  id: string;
  path: string;
  alt: string;
};

export type GalleryProps = {
  imagesList: {
    main: Image;
    others: Image[];
  };
};

const Gallery = ({ imagesList }: GalleryProps) => {
  const isWindowWide = useWindowSize();

  return (
    <>
      {isWindowWide ? (
        <GalleryDesktop imagesList={imagesList} />
      ) : (
        <GalleryMobile imagesList={imagesList} />
      )}
    </>
  );
};

export default Gallery;
