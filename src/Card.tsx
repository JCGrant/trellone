import * as React from 'react';

export interface ICardData {
  title: string;
  description: string;
  isRed: boolean;
}
interface ICardProps extends ICardData {
  onClick: () => void;
}
export default class Card extends React.Component<ICardProps> {
  public render() {
    const style = this.props.isRed ? {color: "red"} : {};
    return (
      <div onClick={this.props.onClick} style={style}>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    )
  }
}
