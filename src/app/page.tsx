import Image from "next/image";
import styles from "./page.module.css";
// import { getDailyStockData } from './lib/getDailyStockData';
import { transformStockData} from './lib/transformStockData';
import data from '../../data.json';



export default function Home() {
  // getDailyStockData('IBM', 'compact').then((data)=>console.log(data)).catch((err)=>console.log(err));
  console.log(transformStockData(data));
  return (
    <main className={styles.main}>
    </main>
  );
}
