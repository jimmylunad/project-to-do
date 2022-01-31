import { useEffect, useState } from 'react';
import ButtonAdd from '../../components/ButtonAdd';
import Task from '../../components/Task';
import useIndexedDb from '../../services/useIndexedDb';
import styles from './Home.module.css';

const Home = () => {
  const indexedDbTask = useIndexedDb();
  const [tasks, setTasks] = useState([]);

  const updateTask = async () => {
    const tasksList = await indexedDbTask.getAll();
    setTasks(tasksList);
    console.log(tasks);
  };

  useEffect(() => {
    updateTask();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.list}>
          { tasks.length <= 0 ? <li className={styles.notCard}>Agregue tareas con el boton +</li>
            : tasks.map((task) => <Task key={task.id} options={task} remove={false} />)}
        </ul>
      </div>
      <ButtonAdd />
    </>
  );
};

export default Home;
