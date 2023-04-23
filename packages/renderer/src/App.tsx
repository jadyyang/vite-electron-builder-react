import ReactiveCounter from '/@/components/ReactiveCounter';
import ReactiveHash from '/@/components/ReactiveHash';
import ElectronVersions from '/@/components/ElectronVersions';

const APP_VERSION = import.meta.env.VITE_APP_VERSION;


function App() {
  return (
    <>
      <div>hello world!</div>
      <div>App version: {APP_VERSION}</div>
 
      <p>
        For a guide and recipes on how to configure / customize this project,<br />
        check out the &nbsp;
        <a 
          href="https://github.com/cawa-93/vite-electron-builder"
          target="_blank" 
          rel="noreferrer"
        >
          vite-electron-builder documentation
        </a>
        &nbsp;and&nbsp;
        <a 
          href="https://github.com/jadyyang/vite-electron-builder-react"
          target="_blank" 
          rel="noreferrer"
        >
          vite-electron-builder-react documentation
        </a>
        .
      </p>  
      <fieldset>
        <legend>Test React Reactivity</legend>
        <ReactiveCounter />
      </fieldset>  
      <fieldset>
        <legend>Test Node.js API</legend>
        <ReactiveHash />
      </fieldset>  
      <fieldset>
        <legend>Environment</legend>
        <ElectronVersions />
      </fieldset>  
      <p>
        Edit
        <code>packages/renderer/src/App.tsx</code> to test hot module replacement.
      </p>
    </>
  );
}

export default App;
