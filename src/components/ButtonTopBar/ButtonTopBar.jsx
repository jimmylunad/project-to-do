import styles from './ButtonTopBar.module.css';

const ButtonTopBar = ({ action, ico: Icon }) => (
  <button type="button" className={styles.buttonTopBar} onClick={action}>
    <Icon />
  </button>
);

export default ButtonTopBar;
