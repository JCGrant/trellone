import * as React from 'react';
import './App.css';
import List, { IListData } from './List';

interface IAppState {
  lists: IListData[];
}
class App extends React.Component<{}, IAppState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      lists: [
        {
          cards: [
            {title: 'give talk', description: 'this is a good thing', isRed: false},
            {title: 'give talk', description: 'this is a good thing', isRed: false},
            {title: 'give talk', description: 'this is a good thing', isRed: false},
          ]
        },
        {
          cards: [
            {title: 'buy flowers', description: 'this is also a good thing', isRed: false},
          ]
        },
        {
          cards: [
            {title: 'write paper', description: 'this is a boring thing', isRed: false},
          ]
        },
      ],
    };
  }

  public render() {
    return this.state.lists.map((listProps, i) =>
      <List onClickCard={this.onClickCard(i)} key={i} {...listProps} />
    );
  }

  private onClickCard = (listIndex: number) => (cardIndex: number) => () => {
    this.setState((state) => ({
      lists: state.lists.map((list, i) => i !== listIndex ? list : ({
        cards: list.cards.map((card, j) => j !== cardIndex ? card :({
          description: card.description,
          isRed: !card.isRed,
          title: card.title,
        }))
      }))
    }))
  }
}

export default App;
