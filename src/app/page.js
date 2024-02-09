import Image from "next/image";
import styles from "./page.module.css";
import dynamic from 'next/dynamic'

const CarouselTest = dynamic(() =>import("../../components/carousel/carousel"), {ssr: false})
const Information = dynamic(() =>import("../../components/information/information"), {ssr: false})
const ShootingStars = dynamic(() =>import("../../components/shootingStars/shootingStars"), {ssr: false})

export default function Home() {
  return (
    <main className={styles.main}>
      <ShootingStars />
      <div className={styles.center}>
      <CarouselTest showArrows={true} />
      </div>
      <footer>
        <Information />
      </footer>
    </main>
  );
}
