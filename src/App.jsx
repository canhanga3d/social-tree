import "./assets/css/Global.css";
import styles from './assets/css/App.module.css';
import { Header } from './assets/components/Header';
import { Nav } from "./assets/components/Nav";
import { Footer } from "./assets/components/Footer";
export function App(){
  return(
    <div className={styles.container}>
      <Header/>
      <Nav/>
      <Footer/>
    </div>
  )
} 