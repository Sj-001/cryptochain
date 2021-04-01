import React, {Component} from 'react'

class App extends Component{

  state = {walletInfo: {address:'fooxv6', balance: 9999}}

  componentDidMount() {
    fetch('http://localhost:3000/wallet-info')
      .then(response => response.json())
      .then(json => console.log('json', json))
  }

  render() {
    const {address, balance} = this.state.walletInfo
    return (
      <div>
        <div>Welcome to the blockchain...</div>
        <div>Address: {address}</div>
        <div>Balance: {balance}</div>
      </div>
    )
  }
}

export default App