import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Employee from './components/Employee'
import Header from './components/Header'
import Footer from './components/Footer'
import CreateEmployee from './components/CreateEmployee'
import UpdateEmployee from './components/UpdateEmployee';
import EmployeeDetail from './components/EmployeeDetail';

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
                            <Route path="/new-employee" component={CreateEmployee}></Route>
                            <Route path="/detail-employee/:id" component={EmployeeDetail}></Route>
                            <Route path="/update-employee/:id" component={UpdateEmployee}></Route>
                        </Switch>
                    </div>
                    <Footer />
                </header>
            </div>
        </Router>
    );
}

export default App;
