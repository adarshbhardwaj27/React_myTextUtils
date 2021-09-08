import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
function App() {
  // const [darkMode, setDarkMode] = useState(false); //Wheter DArk mode is enabled or not
  return (
    <>
      <Navbar title="TextUtils" aboutText='About TextUtils' />
      <div className="container my-3">
        {/* <TextForm heading="Enter the text to Analyze"/><a> */}
        <About />
      </div>
    </>
  );
}

export default App;

