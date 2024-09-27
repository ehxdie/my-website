import logo from './logo.svg';
import './index.css';
import MainContainer from './Components/MainContainer';
import { BrowserRouter, Routes} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './Features/Store';
import { useSelector } from 'react-redux';


function App() {
  const theme = useSelector((state) => state);
  return (
    <div className={theme ? 'App' : "App-dark"}>
      <BrowserRouter>
        {/* <Provider store={store}> */}
          <MainContainer />
        {/* </Provider> */}
      </BrowserRouter>
    </div>
    
  )
}

export default App;
