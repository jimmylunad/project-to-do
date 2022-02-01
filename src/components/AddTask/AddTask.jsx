import { useState } from 'react';
// import useIndexedDb from '../../services/useIndexedDb';
import styles from './AddTask.module.css';

const AddTask = ({ action }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className={styles.title}>
        <h1>Add Task</h1>
      </div>
      <form type="form" className={styles.form} onSubmit={(e) => action(e, value)}>
        <textarea
          type="text"
          onChange={handleChange}
          defaultValue={value}
          placeholder="Add new task..."
        />
        <button className={styles.buttonSave} type="submit" disabled={!value}>Save</button>
      </form>
    </>
  );
};

export default AddTask;
