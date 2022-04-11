import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'

const container = document.getElementById('root')
//@ts-nocheck
//@ts-ignore
const root = createRoot(container)
root.render(<App></App>)
