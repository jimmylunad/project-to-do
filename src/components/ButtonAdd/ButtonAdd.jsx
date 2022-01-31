import { useState } from 'react';
import { ReactComponent as IconPlus } from '../../assets/svg/plus.svg';
import Modal from '../Modal';
import AddTask from '../AddTask';
import styles from './ButtonAdd.module.css';

const ButtonAdd = () => {
  const [active, setActive] = useState(false);

  const handleModal = () => {
    setActive(!active);
  };

  return (
    <>
      <button type="button" className={styles.button} onClick={handleModal}>
        <IconPlus />
      </button>
      <Modal active={active} toggle={handleModal}>
        <AddTask />
      </Modal>
    </>
  );
};

export default ButtonAdd;
