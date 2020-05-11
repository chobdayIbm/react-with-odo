import React from 'react';

class IpList extends React.Component {
  ipAddresses = ['5.39.70.218', '45.9.148.25']
  listItems = this.ipAddresses.map((addr) => 
    <li>{addr}</li>
  )
  render() {
    return (
        <ul>{this.listItems}</ul>
      );
  }

}

export default IpList;
