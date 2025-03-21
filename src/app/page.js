import Image from "next/image";
import styles from "./page.module.css";
import dynamic from 'next/dynamic'
import CarouselTest from "../../components/carousel/carousel";

export default function Home() {
  return (
      <div className={styles.main}>
        <div className={styles.center}>
        <CarouselTest showArrows={true} />
        </div>
      </div>
  );
}
