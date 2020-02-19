import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import TopNav from './components/topNav/topNav';
import BottomNav from './components/bottomNav/bottomNav';
import Movies from './containers/movies/Movies';
import Footer from './components/footer/footer';
import Series from './containers/series/Series';
import Index from './containers/home/Home';

const App = (props) => {
  return ( 
    <React.Fragment>
      <TopNav />
      <BottomNav />
      <main>
        <Switch>
          <Route exact path='/series' component={Series} />
          <Route exact path='/movies' render={ () => <Movies /> } />
          <Route exact path='/home' render={ () => <Index /> }/>
          <Redirect exact path='/' to='/home' />
          <Redirect exact path='' to='/home' />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
   );
}
 
export default App;
