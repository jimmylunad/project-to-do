import { useState } from 'react';
import useIndexedDb from '../../services/useIndexedDb';
import { ReactComponent as IconPlus } from '../../assets/svg/plus.svg';
import Modal from '../Modal';
import AddTask from '../AddTask';
import styles from './ButtonAdd.module.css';

const ButtonAdd = ({ action }) => {
  const [active, setActive] = useState(false);
  const indexedDbTask = useIndexedDb();

  const handleModal = () => {
    setActive(!active);
  };

  const handleSubmit = async (e, value) => {
    e.preventDefault();

    try {
      await indexedDbTask.save({
        title: value,
        status: 1,
      });
      setActive(false);
      action();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button type="button" className={styles.button} onClick={handleModal}>
        <IconPlus />
      </button>
      <Modal active={active} toggle={handleModal}>
        <AddTask
          action={handleSubmit}
        />
      </Modal>
    </>
  );
};

export default ButtonAdd;
