interface WrapperProps {
    children: React.ReactElement
}
import styles from './Section.module.sass'

export const Section = ({children}: WrapperProps) => <section className={styles.section}>{children}</section>