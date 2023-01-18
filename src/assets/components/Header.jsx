import avatarPerfil from '../img/avatarPerfil.jpg';
import styles from '../css/Header.module.css';
export function Header(){
  return (
    <>
    <header className={styles.header}>
      <img src={avatarPerfil} alt="imagem de perfil"></img>
      <h1>@instagram</h1>
    </header>
    </>
  )
}