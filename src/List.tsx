import * as React from 'react';
import Card, { ICardData } from './Card';

export interface IListData {
  cards: ICardData[];
}
interface IListProps extends IListData {
  onClickCard: (i: number) => () => void;
}
export default class List extends React.Component<IListProps> {
  public render() {
    return (
      <div className="list">
        {this.props.cards.map((cardProps, i) =>
          <Card onClick={this.props.onClickCard(i)} key={i} {...cardProps} />
        )}
      </div>
    );
  }
}
