import photo from '../../assets/photo.jpeg';
import { Section } from '../Section';
import { SectionTitle } from '../SectionTitle/SectionTitle';

import styles from './resume.module.sass';

export const Resume = () => {
  return (
    <Section>
      <>
        <SectionTitle title="Resume" />
        <div className={styles.resume}>
          <img className={styles.photo} src={photo} alt="develoceraptor" />
          <div className={styles.info}>
            <h4>My name is Igor Sukhanov</h4>
            <p>Frontend developer</p>
            <p>Опыт работы: 3 года</p>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>REST API</li>
            </ul>
          </div>
        </div>
      </>
    </Section>
  )
}
