import { createPortal } from 'react-dom';
import { PortfolioItem } from '../../types';

import './previewWindow.sass'

interface PreviewWindowProps {
  content: PortfolioItem
}
export const PreviewWindow = ({ content }: PreviewWindowProps) => {
  const { name } = content
  const portalNode: Element | null = document.querySelector('#portal')
  return (<>
    {portalNode &&
      createPortal(
        <div className="window" >
          {name}
        </div >,
        portalNode
      )}
  </>
  )
}