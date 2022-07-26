import React, { useState } from 'react'

import { VerificationModal } from './components/VerificationModal'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className=" bg-gray-100  h-screen  p-2 ">
      <button className="btn btn-primary" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <VerificationModal
        open={open}
        onOpenChange={() => setOpen(false)}
        sendCode={() => console.log('code sent')}
        verifyCode={(code) => console.log('Verify Code', code)}
      />
    </div>
  )
}

export default App
