import Editor from "./editor"
import './App.css'
import { store } from "./store"
import { dark, light } from './editor/styles/theme';

const App = () => {
  // Delete dart:prose-invert to make works paste from google docs
  // with prose invert works only for windows, I don't know why for Os doesn't
  return <div className='app-wrap'><Editor theme={dark} className='editor prose max-w-none'
    defaultValue={store.editorValue}
    uploadImage={upload2}
    placeholder="..." autoFocus /></div>
}
async function upload2(f: File): Promise<string> {
  return URL.createObjectURL(f)
}
export default App