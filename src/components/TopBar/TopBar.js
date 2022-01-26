import Title from '../Title';
import styles from './TopBar.module.css';
import ButtonTopBar from '../ButtonTopBar';

import {ReactComponent as IconTrash} from '../../assets/svg/trash.svg';

const TopBar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.btn}>
        <ButtonTopBar
          ico={IconTrash}
        />
      </div>
      <div>
        <Title
          name={'All Tasks'}
        />
      </div>
      <div className={styles.btn}>
        <ButtonTopBar
          ico={IconTrash}
        />
      </div>
    </div>
  )
}

export default TopBar;
