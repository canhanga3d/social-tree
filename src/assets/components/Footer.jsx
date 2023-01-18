import styles from '../css/Footer.module.css'
import { GithubLogo, InstagramLogo, LinkedinLogo, TwitchLogo, TwitterLogo } from "phosphor-react";

export function Footer(){
  return(
    <>
    <footer className={styles.footer}>
      <a href="https://twitter.com/canhanga3d" target="_blank"><TwitterLogo size={40}/></a>
      <a href="https://www.twitch.tv/" target="_blank"><TwitchLogo size={40}/></a>
      <a href="https://www.instagram.com/canhanga3d/" target="_blank"><InstagramLogo size={40}/></a>
      <a href="https://www.linkedin.com/in/canhanga3d/" target="_blank"><LinkedinLogo size={40}/></a>
      <a href="https://github.com/canhanga3d" target="_blank"><GithubLogo size={40}/></a>
    </footer>
    </>
  )
}