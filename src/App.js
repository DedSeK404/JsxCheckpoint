import './App.css';
import { Pic } from './Component/Profile/ProfilePhoto'
import { Name } from './Component/Profile/FullName'
import { Adress } from './Component/Profile/Adress'

function App() {
  return (
    <>
    <div className='All'>
{/* Picture Card */}
      <div className="Pic_container">
        <Pic whileHover={{ scale: 1.1}} />
      </div>
{/* Name Card */}
      <div className="Name_container">
        <Name />
      </div>
{/* Adress Card */}
      <div className="Adress_container">
        <Adress />
      </div>
    </div>
  </>
);

}



export default App;
