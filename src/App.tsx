import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// @import Layout
import MainLayout from 'layout/MainLayout'
// @import Pages
import Chest from 'pages/Chest'
import Market from 'pages/Market'
// @import Style
// import styled from 'styled-components'

const App: React.FC = () => {
  return (
    <Suspense fallback={<div />}>
      <Router basename="/">
        <Switch>
          <Route path="/chest">
            <MainLayout>
              <Chest />
            </MainLayout>
          </Route>
          <Route path="/market">
            <MainLayout>
              <Market />
            </MainLayout>
          </Route>
        </Switch>
      </Router>
    </Suspense>
  )
}

export default App
