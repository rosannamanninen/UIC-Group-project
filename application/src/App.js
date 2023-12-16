import './assets/App.css';
import Appointment from './page-components/appointment/Appointment';
import Info from './page-components/info/Info';
import Landing from './page-components/landing/Landing';
import Questionnaire from './page-components/questionnaire/Questionnaire';
import Results from './page-components/results/Results';
import Final from './page-components/final/Final';
import {Routes, Route} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { typography } from './theme';
import { CookiePolicy } from './page-components/landing/CookieBox';

const GlobalStyle =createGlobalStyle`
body{
  font-family: 'Inter', sans-serif;
  font-weight: ${typography.body.fontWeight};
  font-size: ${typography.body.fontSize}
}
`;

function App() {
  return (
    <div className="App">
    <GlobalStyle/>
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/info" element={ <Info/>}/>
      <Route path="/questionnaire" element={<Questionnaire />}/>
      <Route path="/results" element={<Results/>}/>
      <Route path="/appointment" element={<Appointment/>}/>
      <Route path="/final" element={<Final/>}/>
      </Routes>
    </div>
  );
}

export default App;
