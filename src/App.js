import React, {Component, Fragment} from 'react';
import Container from "reactstrap/es/Container";
import Header from "./Component/Ui/Header/Header";
import Central from "./Container/Central/Central";
import {Route, Switch} from "react-router-dom";
import Add from "./Container/Add/Add"
import Edit from "./Container/Edit/Edit";

class App extends Component {

    render() {
        return (
            <Fragment>
                <Header/>
                <Container>
                    <Switch>
                        <Route path="/" exact component={Central}/>
                        <Route path="/categories/:name"  component={Central}/>
                        <Route path="/edit/:id" component={Edit}/>
                        <Route path="/add" component={Add} />
                        {/*<Route path="/remove/:id" component={Central}/>*/}
                        <Route render={() => <h1>Not a found</h1>}/>
                    </Switch>

                </Container>
            </Fragment>
        );
    }
}

export default App;