import NavBar from '../nav-bar/nav-bar'
import Main from '../main/main'
import styles from './app.module.css'
import ListBox from '../list-box/list-box'

function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <Main>
        <ListBox />
        <ListBox />
      </Main>
    </div>
  )
}

export default App
