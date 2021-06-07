import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Employee from './components/Employee'
import Header from './components/Header'
import Footer from './components/Footer'
import FormCreateEmployee from './components/FormCreateEmployee'

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Header />
                    <div className="container">
                        <Switch>
                            <Route path="/" exact component={Employee}></Route>
                            <Route path="/employees" component={Employee}></Route>
                            <Route path="/new-employee" component={FormCreateEmployee}></Route>
                        </Switch>
                    </div>
                    <Footer />
                </header>
            </div>
        </Router>
    );
}

export default App;
