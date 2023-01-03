import './App.css';
import { Picture } from './Component/Profile/ProfilePhoto'
import { Name } from './Component/Profile/FullName'
import { Adress } from './Component/Profile/Adress'

function App() {
  return (
    <>
      <div className='All'>
        <div className="Pic_container">
          <Picture/>
        </div>
        <div className="Name_container">
          <Name/>
        </div>
        <div className="Adress_container">
          <Adress/>
        </div>
      </div>
    </>
  );

}


export default App;
