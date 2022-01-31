import styles from './Task.module.css';
import { ReactComponent as IconCheck } from '../../assets/svg/check.svg';
import { ReactComponent as IconTrash } from '../../assets/svg/cross.svg';

const Task = ({ options, remove }) => {
  const { id, title, status } = options;
  const cardInactive = status === 2;

  return (
    <li key={id} className={`${styles.card} ${cardInactive && styles.cardInactive}`}>
      <div className={styles.title}>
        <h4>{title}</h4>
      </div>
      {
        !cardInactive && (
          <button
            type="button"
            className={`${styles.button} ${remove ? styles.buttonDelete : styles.buttonSend}`}
          >
            {
              remove ? <IconTrash /> : <IconCheck />
            }
          </button>
        )
      }
    </li>
  );
};

export default Task;
