import type { Item } from '../types.t'
import './listItem.sass'

interface ListItemProps {
  item: Item
}

export const ListItem = ({ item }: ListItemProps) => {
  const { name } = item
  return (
    <div className='list_item'>
      <div>
        {name}
      </div>
    </div>
  )
}