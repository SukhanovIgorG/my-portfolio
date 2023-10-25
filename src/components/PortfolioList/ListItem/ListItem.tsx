import { useState } from 'react'
import { PreviewWindow } from '../../PreviewWindow'
import type { PortfolioItem } from '../../../types'
import './listItem.sass'

interface ListItemProps {
  item: PortfolioItem
}

export const ListItem = ({ item }: ListItemProps) => {
  const [showPreview, setShowPreview] = useState(false)

  const { name } = item
  return (
    <>
    <div className='list_item' onClick={ ()=> setShowPreview(true)}>
      <h3 className='list_item__name'>
        {name}
      </h3>
      </div>
      {showPreview && <PreviewWindow content={item} />}
    </>
  )
}