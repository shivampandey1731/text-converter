import './App.css'; // Import styles from App.css
import Navbar from './components/Navbar'; // Import Navbar component
import TextForm from './components/TextForm'; // Import TextForm component


function App() {
  return (
    <> {/* Fragment for better code organization */}
      <Navbar /> {/* Render the Navbar component */}
      <div className="container">
        <TextForm heading="Enter text to visualize" /> 
        
      </div>
    </>
  );
}

export default App;
