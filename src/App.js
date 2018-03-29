import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import {game} from './middleware/game';
import Pacman from './components/pacman/Pacman';
import Breaks from './components/breaks/Breaks';
import Spider from './components/spider/Spider';
import Way from './components/way/Way';
import Gates from './components/gates/Gates';
import './App.less';
import {ACTION_CHANGE_ZONE} from './constants';

//const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(
  reducer,
  applyMiddleware(game));

class App extends Component {

  constructor(props) {
    super(props);
    this.next = 1;
  }

  shouldComponentUpdate() {
    return true;
  }

  updateZone() {
    if(typeof this.next != 'undefined') {
      store.dispatch({type: ACTION_CHANGE_ZONE, payload: this.next});
      this.setState(store.getState());
      if(this.next < 2) {
        this.next++;
      }
    }
  }


  render() {

    const state = store.getState();

    const spiders = Object.keys(state.spiders).map((color, i) => {
      return <Spider key={`s${i}`} color={color} />;
    });

    const field = state.field.map((line, i) => {
      return (<div key={i} className="row">
        {line.map((cell, j) => {
          let key = `w${i}.${j}`;
          switch (cell) {
            case 0:
            case 1:
            case 2:
              return <Way key={key} has={cell}/>
            case 4:
              return <Breaks key={key}/>
            case 8:
              return <Gates key={key}/>
            default:
          }
          return '';
        })}
      </div>)
    });

    return (<Provider store={store}>
              <div className="App">
                <div className="field">
                  <Pacman />
                  {spiders}
                  {field}
                </div>
              </div>
            </Provider>);
  }
}

export default App;
