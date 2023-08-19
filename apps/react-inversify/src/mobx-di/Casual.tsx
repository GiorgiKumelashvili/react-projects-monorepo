import { observer } from 'mobx-react';
import * as React from 'react';
import { myContainer } from './inversify.config';
import { IStor } from './store';
import TYPE from './types';

@observer
export default class Casual extends React.Component<object, object> {
  private store: IStor = myContainer.get<IStor>(TYPE.IStor);

  public render() {
    return (
      <div>
        <h1>{this.store.num}</h1>
        <h2>{this.store.retunum}</h2>
        <h2>{this.store.addNum}</h2>
        <button onClick={() => this.onClickAdd()}>nc</button>
      </div>
    );
  }

  public onClickAdd = () => {
    this.store.add();
  };
}
