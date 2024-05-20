import { Footer, Header, PortfolioList } from '../../components';
import { Resume } from '../../components';
import './mainPage.sass';

const MainPage = () => {
  return (
    <>
      <Header />
      <Resume />
      <PortfolioList/>
      <Footer/>
    </>
  )
}

export default MainPage