import styles from './Task.module.css';
import { ReactComponent as IconCheck } from '../../assets/svg/check.svg';
import { ReactComponent as IconTrash } from '../../assets/svg/cross.svg';

const Task = ({ options, done, event }) => {
  const { id, title, status } = options;
  const cardInactive = status === 0;

  return (
    <li key={id} className={`${styles.card} ${cardInactive && styles.cardInactive}`}>
      <div className={styles.title}>
        <h4>{title}</h4>
      </div>
      {
        !cardInactive && (
          <button
            type="button"
            className={`${styles.button} ${!done ? styles.buttonDelete : styles.buttonSend}`}
            onClick={() => event(id, !done)}
          >
            {
              !done ? <IconTrash /> : <IconCheck />
            }
          </button>
        )
      }
    </li>
  );
};

export default Task;
