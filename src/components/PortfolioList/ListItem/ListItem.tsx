import type { PortfolioItem } from '../../../types'
import styles from './listItem.module.sass'

interface ListItemProps {
  item: PortfolioItem,
}

export const ListItem = ({ item }: ListItemProps) => {

  const { name, year } = item
  return (
    <div className={styles.listItem} onClick={() => {}}>
      <h4 className={styles.name}>
      <span className={styles.year}>
        {year}
      </span>
        {name}
      </h4>
    </div>
  )
}