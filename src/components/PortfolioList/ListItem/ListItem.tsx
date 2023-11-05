import type { PortfolioItem } from '../../../types'
import './listItem.sass'

interface ListItemProps {
  item: PortfolioItem,
  setPreview: (item:PortfolioItem) => void
}

export const ListItem = ({ item, setPreview }: ListItemProps) => {

  const { name, year } = item
  return (
      <div className='list_item' onClick={() => setPreview(item)}>
        <span className='list_item__year'>
          {year}
        </span>
        <h4 className='list_item__name'>
          {name}
        </h4>
      </div>
  )
}