import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AddUser } from "./Components/AddUser";
import { AllUser } from './Components/AllUser';
import { CodeForInterview } from './Components/CodeForInterview';
import { EditUser } from "./Components/EditUser";
import { NavBar } from './Components/NavBar';
import { NotFound } from './Components/NotFound';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={CodeForInterview} />
        <Route path="/add" component={AddUser} />
        <Route path="/all-users" component={AllUser} />
        <Route path="/edit/:id" component={EditUser} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
