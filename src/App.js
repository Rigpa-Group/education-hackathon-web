import React, {useReducer} from 'react';
import useCombinedReducers from 'use-combined-reducers';
import {SnackbarProvider} from 'notistack';
import {ThemeProvider} from '@material-ui/core/styles';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ApiUtils} from './utils/ApiUtils';
import {DispatchContext, StateContext} from './store';
import {createBrowserHistory} from 'history';
import {Login} from './components/auth/Login/Login';
import SignUp from './components/auth/SignUp/SignUp';
import EmailConfirmation from './components/auth/UserVarification/EmailConfirmation';
import {protectedRoutes} from './routes/ProctectedRoute';
import {ProtectedNavigator} from './routes/ProtedNavigator';
import {theme} from './Theme';
import {initialUser, userReducer} from './reducers';

function App() {
  const [state, dispatch] = useCombinedReducers({
    user: useReducer(userReducer, initialUser),
  });

  ApiUtils.dispatch = dispatch;
  const history = createBrowserHistory();

  return (
    <React.Fragment>
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={2}>
              <Router history={history}>
                <Switch>
                  {/*{
                    landingRoutes.map((nav, index) => (
                      <LandingNavigator {...nav} key={index} path={nav.path}
                                        component={nav.component} exact/>))
                  }*/}
                  {
                    protectedRoutes.map((nav, index) => (
                      <ProtectedNavigator {...nav} key={index} path={nav.path}
                                          component={nav.component} exact/>))
                  }
                  <Route path="/" component={Login} exact/>
                  <Route path="/login" component={Login} exact/>
                  <Route path="/sign-up" component={SignUp} exact/>
                  {/*<Route path="/forbidden" component={ForbiddenPage} exact/>*/}
                  <Route path="/auth/confirmation" component={EmailConfirmation} exact/>
                  {/*<Route path="*" component={NotFound}/>*/}
                </Switch>
              </Router>
            </SnackbarProvider>
          </ThemeProvider>
        </StateContext.Provider>
      </DispatchContext.Provider>
    </React.Fragment>
  );
}

export default App;
