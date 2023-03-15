import logo from './logo.svg';
import './App.css';
import React from 'react'
import action from './action'

function App() {

  const [userList, setUserList] = React.useState(() => ([]))
  React.useEffect(() => {
    action.onGlobalStateChange((state) => {
      console.log('子类获取---react', state);
      setUserList(state.userInfo)
    }, true)
  }, [])

  const onChangeGlobalUserList = () => {
    const temp = JSON.parse(JSON.stringify(userList))
    temp.push({
      userName: 'xxxreact',
      userId: new Date().getTime()
    })
    action.setGlobalState({
      userInfo: temp
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>在子类react中的数量是: {userList.length}</p>
        <button onClick={onChangeGlobalUserList}>更改</button>
      </header>
    </div>
  );
}

export default App;
