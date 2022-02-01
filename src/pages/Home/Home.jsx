import { useEffect, useState } from 'react';
import ButtonAdd from '../../components/ButtonAdd';
import Task from '../../components/Task';
import useIndexedDb from '../../services/useIndexedDb';
import styles from './Home.module.css';

const Home = ({ action }) => {
  const indexedDbTask = useIndexedDb();
  const [tasks, setTasks] = useState([]);

  const updateTask = async () => {
    const tasksList = await indexedDbTask.getOrderBy({ column: 'status' });
    setTasks(tasksList);
  };

  useEffect(() => {
    updateTask();
  }, []);

  const removeTask = async (id) => {
    // eslint-disable-next-line no-alert
    if (window.confirm('¿Seguro que quieres borrar esta tarea?')) {
      await indexedDbTask.remove(id);
    }
  };

  const handleEvent = async (id, remove) => {
    if (remove) await removeTask(id);
    else await indexedDbTask.update(id, { status: 0 });
    updateTask();
  };

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.list}>
          { tasks.length <= 0 ? <li className={styles.notCard}>Agregue tareas con el boton +</li>
            : tasks.map((task) => (
              <Task
                key={task.id}
                options={task}
                done={action}
                event={handleEvent}
              />
            ))}
        </ul>
      </div>
      <ButtonAdd
        action={updateTask}
      />
    </>
  );
};

export default Home;
