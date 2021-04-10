import logo from './logo.svg';
import './App.css';
import './styles.css'
import ProfilPhoto from './Component/Profile/ProfilPhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';

function App() {
  return (
    <div className="container">
      <div className="profilPhoto">
      <ProfilPhoto/> 
      </div>
      <div className="fullName">
      Mon nom et prénom : <FullName/>
      </div>
      <div className="address">
       L'adresse est:  <Address/>
      </div>
    </div>
  );
}

export default App;
