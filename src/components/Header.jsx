import React from 'react';
import { getUser } from '../services/userAPI';
import Charging from './Charging';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      getUserName: false,
      userName: '',
    };
  }

  componentDidMount() {
    this.onOpen();
  }

  onOpen = async () => {
    this.setState({ loading: true });
    const user = await getUser();
    this.setState({
      userName: user.name,
      loading: false,
      getUserName: true,
    });
    return user.name;
  }

  render() {
    const { loading, getUserName, userName } = this.state;
    if (loading === false && getUserName === true) {
      return (
        <header data-testid="header-component">
          <p data-testid="header-user-name">{userName}</p>
        </header>
      );
    }
    if (loading === true && getUserName === false) {
      return (<Charging />);
    }
    return (<Charging />);
  }
}
