import styles from '../css/Nav.module.css'
import { Li } from './Li'
export function Nav(){
  return (
  <>
  <nav className={styles.nav}>
    <ul>
      <Li href={"https://youtube.com"} target={"_blank"} link={"youtube"}/>
      <Li href={"https://udemy.com"} target={"_blank"} link={"udemy"}/>
      <Li href={"https://rocketseat.com.br"} target={"_blank"} link={"rocketseat"}/>
      <Li href={"https://cs50.harvard.edu/x/2022"} target={"_blank"} link={"cs50 harvard"}/>
    </ul> 
  </nav>
  </>
  ) 
}