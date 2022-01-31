import Portal from '../../Portal';
import styles from './Modal.module.css';

import { ReactComponent as IconClose } from '../../assets/svg/cross.svg';

const Modal = (props) => {
  const { children, toggle, active } = props;

  return (
    <Portal>
      { active && (
        <div className={styles.wrapper}>
          <div className={styles.window}>
            <button type="button" className={styles.closeBtn} onClick={toggle}>
              <IconClose className={styles.closeBtnIco} />
            </button>
            <div>
              {children}
            </div>
          </div>
        </div>
      )}
    </Portal>
  );
};

export default Modal;
