import { ListItem } from './ListItem'
import { list } from './constants'

import styles from './portfolioList.module.sass'

interface Item {
  name: string
  year: number
  link: string
}

export const PortfolioList = () => {
  return (
    <div className={styles.portfolioList}>
      {list.map((item: Item, i) => <ListItem item={item} key={i * Math.random()} />)}
    </div>
  )
}