import styles from './DeveloperInfo.module.css';

const DeveloperInfo = () => (
  <>
    <div className={styles.title}>
      <h1>All Task</h1>
    </div>
    <div className={styles.info}>
      <ul className={styles.infoUl}>
        <li>
          <h5>Jimmy Luna</h5>
          <span>Full Stack Developer</span>
        </li>
        <li>
          <a href="https://github.com/jimmylunad/project-to-do" target="_blank" rel="noreferrer">
            <h5>jimmylunad/project-to-do</h5>
          </a>
          <span>Github repository</span>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jimmyluna" target="_blank" rel="noreferrer">
            <h5>jimmyluna</h5>
          </a>
          <span>Linkedin</span>
        </li>
      </ul>
    </div>
  </>
);

export default DeveloperInfo;
