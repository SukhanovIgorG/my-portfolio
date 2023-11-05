import { useState } from 'react'
import { ListItem } from './ListItem'
import { list } from './constants'
import { PreviewWindow } from '../../components'

import './portfolioList.sass'

interface Item {
  name: string
  year: number
  link: string
}

export const PortfolioList = () => {
  const [content, setContent] = useState<Item | null>(null)

  const previewHandler = (content: Item) => {
    setContent(content)
  }

  return (<>
    <div className='portfolio_list'>
      {list.map((item: Item, i) => <ListItem item={item} setPreview={previewHandler} key={i * Math.random()} />)}
    </div>
    {content && <PreviewWindow content={content} />}
  </>
  )
}