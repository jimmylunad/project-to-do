import { useState } from 'react';
import Title from '../Title';
import styles from './TopBar.module.css';
import ButtonTopBar from '../ButtonTopBar';
import Modal from '../Modal';
import DeveloperInfo from '../DeveloperInfo';

import { ReactComponent as IconInfo } from '../../assets/svg/info.svg';
import { ReactComponent as IconCheckbox } from '../../assets/svg/checkbox.svg';
import { ReactComponent as IconTrash } from '../../assets/svg/trash.svg';

const TopBar = ({ action, trash }) => {
  const [active, setActive] = useState(false);

  const handleModal = () => {
    setActive(!active);
  };

  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.btn}>
          <ButtonTopBar
            ico={IconInfo}
            action={handleModal}
          />
        </div>
        <div>
          <Title
            name="All Tasks"
          />
        </div>
        <div className={styles.btn}>
          <ButtonTopBar
            ico={trash ? IconTrash : IconCheckbox}
            action={action}
          />
        </div>
      </div>
      <Modal active={active} toggle={handleModal}>
        <DeveloperInfo />
      </Modal>
    </>
  );
};

export default TopBar;
