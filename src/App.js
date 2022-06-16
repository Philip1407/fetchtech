import './App.css';
import {Progressbar, Carousel, BottomNavBar} from './components'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import {petrol,rental,food} from './assets';

const Petrol = [
  {
  img: petrol,
  title: '15 Coins',
  content: '50% discount  for every $100 top-up on your Shell Petrol Card',
  sufficient: true
  },
  {
    img: petrol,
    title: '15 Coins',
    content: '50% discount  for every $100 top-up on your Shell Petrol Card',
    sufficient: false
  },
  {
    img: petrol,
    title: '15 Coins',
    content: '50% discount  for every $100 top-up on your Shell Petrol Card',
    sufficient: true
  },
  {
    img: petrol,
    title: '15 Coins',
    content: '50% discount  for every $100 top-up on your Shell Petrol Card',
    sufficient: false
  }
]

const Rental=[
  {
    img: rental,
    title: '20 Coins',
    content: 'Get $20 Rental rebate',
    sufficient: true
    },
    {
      img: rental,
      title: '15 Coins',
      content: 'Get $500 Rental rebate',
      sufficient: true
    },
    {
      img: rental,
      title: '15 Coins',
      content: 'Get $20 Rental rebate',
      sufficient: true
    },
    {
      img: rental,
      title: '15 Coins',
      content: 'Get $500 Rental rebate',
      sufficient: true
    }
]

const Food =[
  {
    img: food,
    title: '15 Coins',
    content: 'NTUC Fairprice $50 Voucher',
    sufficient: true
  },
  {
    img: food,
    title: '15 Coins',
    content: 'Free Cold Stone Sundae at any flavour!',
    sufficient: true
  }
]

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <button className='backButton'><AiOutlineLeft/></button>
        <h2>Silver Tier</h2>
        <p>In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards</p>
      </div>
      <div className='card'>
        <h6>Availabe Coin balance</h6>
        <h2>340</h2>
        <Progressbar bgcolor="blue" progress='70' height='10px'/>
        <p>You have paid rental fee for $1200.</p>
        <p>Pay more $800 to archive Gold Tier</p>
        <a href='#'>View tier benefits <AiOutlineRight/></a>
        <br></br>
        <button>My coupons</button>
        <p className='date'>Updated: 02/11/2021</p>
      </div>
      <Carousel className='Carousel' title='Petrol' items={Petrol}/>
      <Carousel className='Carousel' title='Rental Debate' items={Rental}/>
      <Carousel className='Carousel' title='Food and Bevegrage' items={Food}/>
      <div className='navbarSpace'/>
      <BottomNavBar/>
    </div>
  );
}

export default App;
