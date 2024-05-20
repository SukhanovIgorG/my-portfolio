import type { PortfolioItem } from '../../../types'
import styles from './listItem.module.sass'

interface ListItemProps {
  item: PortfolioItem,
  isOpen: boolean,
  onOpen: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, n: string) => void
}

export const ListItem = ({ item, isOpen, onOpen }: ListItemProps) => {
  const { name, year } = item
  return (
    <div className={styles.listItem} onClick={(e) => onOpen(e , name)}>
      <h4 className={styles.name}>
        <span className={styles.year}>{year}</span>
        {name}
      </h4>
      {isOpen && <div>
        <div className={styles.description}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora enim recusandae ea? Numquam magnam explicabo non cum tenetur provident aut repellat sequi delectus. Vel, quidem voluptates quisquam error pariatur velit.</p>
        </div>
      </div>}
    </div>
  )
}