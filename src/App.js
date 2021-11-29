import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import Studenttemplate from './components/Studenttemplates'
import Culturalletter from './components/Culturalletter';
import Culturalform from './components/Culturalform'
import Teachertemplates from './components/Teachertemplates'
import Recommendation from './components/Recommendation'
import Officialtemplates from './components/Officialtemplates'
import Holiday from './components/Holiday'
import Fundraising from './components/Fundraising'
import Leave from './components/Leave'
import Studyleave from './components/Studyleave'
import Examdeclaration from './components/Examdeclaration'

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
        <Route
              exact
              path="/" component={Home} 
        />
        <Route
          path="/student" component={Studenttemplate} 
        />

        <Route
          path="/teacher" component={Teachertemplates} 
        />

        <Route
          path="/official" component={Officialtemplates} 
        />

        <Route
          path="/cultural" component={Culturalletter} 
        />
        <Route
          path="/holiday" component={Holiday} 
        />

        <Route
          path="/recommend" component={Recommendation} 
        />

        <Route
          path="/culturalform" component={Culturalform} 
        />
        <Route
          path="/fundraising" component={Fundraising} 
        />

        <Route
          path="/leave" component={Leave} 
        />

        <Route
          path="/studyleave" component={Studyleave} 
        />

        <Route
          path="/examdeclaration" component={Examdeclaration} 
        />

    </div>
    </Router>
  );
}

export default App;
