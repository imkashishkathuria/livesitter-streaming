import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cameras from './pages/Cameras'
import Finance from './pages/Finance'
import AccountStatus from './pages/AccountStatus'
import Dashboard from './pages/Dashboard'
import RecurryingPayment from './pages/RecurryingPayment'
import NewCamera from './pages/NewCamera'
import StreamTest from './pages/StreamTest'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/main" element={<Dashboard />} />
        <Route path="/cameras" element={<Cameras />} />
        <Route path="/finance" element={<Finance />} />
         <Route path="/accountstatus" element={<AccountStatus />} />
        <Route path="/recurringpayment" element={<RecurryingPayment />} />
         <Route path="/newcamera" element={<NewCamera />} />
          <Route path="/streamtest" element={<StreamTest />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
