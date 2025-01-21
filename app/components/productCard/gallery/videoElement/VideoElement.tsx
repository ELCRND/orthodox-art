import styles from "./videoElement.module.css";

type Props = {
  el: string;
  handleClick: (el: string) => void;
};

const VideoElement = ({ el, handleClick }: Props) => {
  return (
    <div className={styles.videoContainer} onClick={() => handleClick(el)}>
      <video width={160} height={125}>
        <source src={el} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoElement;
