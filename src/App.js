import { useSelector } from 'react-redux';
import Editor from './components/editor';
import SelectMenu from './components/selectMenu';

function App() {
  const selectMenuState = useSelector((state) => state.block.showSelectMenu);

  return (
    <div className="container">
      <h1 className="Logo">Front-end developer test project</h1>
      <p className="Intro">
        Your goal is to make a page that looks exactly like this one and has the
        ability to create H1 text simply by typing / then 1, then typing text,
        and hitting enter
      </p>
      {selectMenuState && <SelectMenu />}

      <Editor />
    </div>
  );
}

export default App;
