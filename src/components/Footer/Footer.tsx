import { Link } from 'react-router-dom';
import './footer.sass';

export const Footer = () => {
  return (
    <footer>
      <div className='left'>
        <Link to='./'>link 1</Link>
        <Link to='./'>link 2</Link>
        <Link to='./'>link 3</Link>
      </div>
      <div className='right'>
        <Link to='./'>link 11</Link>
        <Link to='./'>link 22</Link>
        <Link to='./'>link 33</Link>
      </div>
    </footer>
  )
}