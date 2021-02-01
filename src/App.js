import './App.css';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';


function App() {
  return (
    <div className="App">
      <AppBar>
        <ToolBar>
          <IconButton  edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <h1>Water Your Plants</h1>
        </ToolBar>
      </AppBar>
    </div>
  );
}

export default App;
