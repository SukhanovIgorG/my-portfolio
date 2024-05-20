import styles from './sectionTitle.module.sass'

export const SectionTitle = ({ title }: { title: string }) => <h2 className={styles.title}>{title}</h2>