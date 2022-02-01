import styles from './Task.module.css';
import { ReactComponent as IconCheck } from '../../assets/svg/check.svg';
import { ReactComponent as IconTrash } from '../../assets/svg/cross.svg';

const Task = ({
  options,
  done,
  event,
}) => {
  const { id, title, status } = options;
  const cardInactive = status === 0;
  const { handleEvent, handleEdit } = event;

  return (
    <li
      className={`${styles.card} ${cardInactive ? styles.cardInactive : ''}`}
      onClick={(e) => !cardInactive && handleEdit(e, { id, title })}
      role="presentation"
    >
      <div className={styles.title}>
        <h4>{title}</h4>
      </div>
      {
        !cardInactive && (
          <button
            type="button"
            className={styles.button}
            onClick={(e) => handleEvent(e, id, !done)}
          >
            <div className={`${styles.buttonCircle} ${!done ? styles.buttonDelete : styles.buttonSend}`}>
              {
                !done ? <IconTrash /> : <IconCheck />
              }
            </div>
          </button>
        )
      }
    </li>
  );
};

export default Task;
