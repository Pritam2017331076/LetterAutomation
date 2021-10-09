import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import Studenttemplate from './components/Studenttemplates'
import Culturalletter from './components/Culturalletter';
import Culturalform from './components/Culturalform'
import Teachertemplates from './components/Teachertemplates'
import Recommendation from './components/Recommendation'

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
          path="/cultural" component={Culturalletter} 
        />

        <Route
          path="/recommend" component={Recommendation} 
        />

        <Route
          path="/culturalform" component={Culturalform} 
        />

    </div>
    </Router>
  );
}

export default App;
