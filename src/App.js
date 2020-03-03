import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header"
import Contents from "./components/contents/Contents"

export default function App() {
  return (
    <div>
     <Header/>
     <Contents/>
    </div>
  )
}