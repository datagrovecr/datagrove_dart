import Editor from "./editor"
import './App.css'
import { store } from "./store"
import { light } from './editor/styles/theme';

const App = () => {
  return <div className='app-wrap'><Editor theme={light} className='editor prose max-w-none'
    defaultValue={store.editorValue}
    uploadImage={upload2}
    placeholder="..." autoFocus /></div>
}
async function upload2(f: File): Promise<string> {
  return URL.createObjectURL(f)
}
export default App