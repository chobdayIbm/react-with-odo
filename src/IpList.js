import React from 'react';

class IpList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    const BACKEND_API_URL = `http://${process.env.REACT_APP_BACKEND_HOST}:80`
    const URL = `${BACKEND_API_URL}/ips`
    fetch(URL, {
    }).then(res => res.json())
      .then(
        (result) => {
            console.log(result)
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
            {items.map(item => (
                <li key={item}>
                    {item}
                </li>
            ))}
        </ul>
      );
    }
  }

}

export default IpList;
