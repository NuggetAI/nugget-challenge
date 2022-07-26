import React, { useState } from 'react'

import { VerificationModal } from './components/VerificationModal'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className=" bg-gray-100  h-screen  p-2 ">
      {!open && (
        <button className="btn btn-primary" onClick={() => setOpen(true)}>
          Open Modal
        </button>
      )}

      {open && <VerificationModal open={open} onOpenChange={() => setOpen(false)} />}

      {open && (
        <div
          className="fixed inset-0  bg-black bg-opacity-40  z-10"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  )
}

export default App
