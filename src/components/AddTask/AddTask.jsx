import { useState, useEffect, useRef } from 'react';
// import useIndexedDb from '../../services/useIndexedDb';
import styles from './AddTask.module.css';

const AddTask = ({ action }) => {
  const [value, setValue] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

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
          ref={textareaRef}
          defaultValue={value}
          placeholder="Add new task..."
        />
        <button className={styles.buttonSave} type="submit" disabled={!value}>Save</button>
      </form>
    </>
  );
};

export default AddTask;
