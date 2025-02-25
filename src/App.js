import logo from './logo.svg';
import './App.css';
import Jitsi from 'react-jitsi'

const roomName = 'kitconcept-digital-office-123e4567-e89b-12d3-a456-426655440000'
const userFullName = 'Timo Stollenwerk'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Jitsi roomName={roomName} displayName={userFullName} config={{prejoinPageEnabled: false}} />
      </header>
    </div>
  );
}

export default App;
