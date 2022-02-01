import { useEffect, useState } from 'react';
import ButtonAdd from '../../components/ButtonAdd';
import Task from '../../components/Task';
import Modal from '../../components/Modal';
import AddTask from '../../components/AddTask';
import useIndexedDb from '../../services/useIndexedDb';
import styles from './Home.module.css';

const Home = ({ action }) => {
  const indexedDbTask = useIndexedDb();
  const [active, setActive] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});

  const handleModal = () => {
    setActive(!active);
  };

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

  const handleEvent = async (e, id, remove) => {
    e.stopPropagation();
    if (remove) await removeTask(id);
    else await indexedDbTask.update(id, { status: 0 });
    updateTask();
  };

  const handleEdit = async (e, data) => {
    e.preventDefault();
    setTask(data);
    handleModal();
  };

  const handleUpdateEdit = async (e, value) => {
    e.preventDefault();
    await indexedDbTask.update(task.id, { title: value });
    handleModal();
    updateTask();
  };

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.list}>
          { tasks.length <= 0 ? <li className={styles.notCard}>Agregue tareas con el boton +</li>
            : tasks.map((taskElement) => (
              <Task
                key={taskElement.id}
                options={taskElement}
                done={action}
                event={{ handleEvent, handleEdit }}
              />
            ))}
        </ul>
      </div>
      <ButtonAdd
        action={updateTask}
      />
      <Modal active={active} toggle={handleModal}>
        <AddTask
          action={handleUpdateEdit}
          info={task}
        />
      </Modal>
    </>
  );
};

export default Home;
