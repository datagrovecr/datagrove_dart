import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
     <App />
   </React.StrictMode>
 )
import { EditorView, basicSetup } from "codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { oneDark } from "./theme/one-dark"
import {CodeMirror} from "code-mirror-themes"

var myCodeMirror = CodeMirror(document.body, {
  mode: 'javascript',
  lineNumbers: true,
  theme: 'bespin'

})

let editor = new EditorView({
  extensions: [basicSetup,
    oneDark,
    javascript()],
  parent: document.body
})
