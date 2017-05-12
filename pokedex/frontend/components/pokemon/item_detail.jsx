import React from 'react';

class ItemDetail extends React.Component {
  render() {
    if (this.props.itemDetail) {
      const { itemDetail } = this.props;
      return (
        <section className="item_detail">
          <ul>
            <li>Name: {itemDetail.name}</li>
            <li>Price: {itemDetail.price}</li>
            <li>Happiness: {itemDetail.happiness}</li>
          </ul>
        </section>
      );
    } else {
      return(<div></div>);
    }
  }
}

export default ItemDetail;
