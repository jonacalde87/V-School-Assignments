import React from 'react'
import '../css/app.css'
import Form from './Form'
import List from './List'
import { UglyContextProvider } from '../uglyContext'

//2. wrap provider in this component because it has all the child components we want to change: Form and List
export default function App() {

  return (
    <>  
      <UglyContextProvider>
        <Form />
        <List /> 
      </UglyContextProvider>  
    </>
  )
}


