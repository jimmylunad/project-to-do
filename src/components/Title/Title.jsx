import styles from './Title.module.css';

const Title = ({ name }) => (
  <h1 className={styles.title}>{ name }</h1>
);

export default Title;
