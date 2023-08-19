import 'reflect-metadata';
import ReactDOM from 'react-dom';
import MobxEighth from './mobx-di-8-libs-best/MobxEighth';
import MobxSeventh from './mobx-di-7-libs/MobxSeventh';
import MobxFirst from './mobx-di/MobxFirst';
import MobxSecond from './mobx-di-2/MobxSecond';
import MobxThird from './mobx-di-3/MobxThird';
import MobxFourth from './mobx-di-4/MobxFourth';
import MobxFifth from './mobx-di-5/MobxFifth';

ReactDOM.render(
  <div>
    <MobxEighth />
    <MobxSeventh />
    <MobxFifth />
    <MobxFourth />
    <MobxThird />
    <MobxSecond />
    <MobxFirst />
  </div>,
  document.getElementById('root')
);
