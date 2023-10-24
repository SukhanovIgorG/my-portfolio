import { ListItem } from './ListItem/ListItem'
import { list } from './constants'
import './portfolioList.sass'

interface Item {
  name: string
  year: number
  link: string
}

export const PortfolioList = () => {

  return (
  <div className='portfolio_list'>
    {list.map((item: Item, i) => <ListItem item={item} key={i * Math.random()} />)}
  </div>
  )
}