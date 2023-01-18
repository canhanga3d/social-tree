import styles from "../css/Li.module.css";
export function Li({ href, target, link }) {
  return (
    <li className={styles.listItem}>
      <a href={href} target={target}>
        {link}
      </a>
    </li>
  )
}
