import styles from './ButtonTopBar.module.css';

const handleAction = () =>  {
  console.log('se hizo clic')
}

const ButtonTopBar = ({ico: Icon}) => {
  return (
    <button className={styles.buttonTopBar} onClick={handleAction}>
      <Icon />
    </button>
  )
}

export default ButtonTopBar;
