import { useState } from 'react'
import { ListItem } from './ListItem'
import { list } from './constants'

import styles from './portfolioList.module.sass'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { Section } from '../Section'

interface Item {
  name: string
  year: number
  link: string
}

const acc: Record<string, boolean> = {}
const defaultState = list.reduce((acc, { name }) => ({ ...acc, [name]: false }), acc);

export const PortfolioList = () => {
  const [isOpen, setIsOpen] = useState(defaultState)
  function toggleOpen(e: React.MouseEvent<HTMLDivElement, MouseEvent>, name: string): void {
    e.stopPropagation()
    setIsOpen(isOpen => ({ ...{}, [name]: !isOpen[name] }))
  }

  function overlayClick(): void {
    setIsOpen(defaultState)
  }

  return (
    <Section>
      <>
        <SectionTitle title="Portfolio" />
        <div className={styles.portfolioList} onClick={overlayClick}>
          {list.map((item: Item, i) =>
            <ListItem
              item={item}
              key={i * Math.random()}
              isOpen={isOpen[item.name]}
              onOpen={toggleOpen}
            />)}
        </div>
      </>
    </Section>
  )
}