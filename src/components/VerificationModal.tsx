import React from 'react'

export interface VerificationModalProps {
  /**
   * State of modal open.
   */
  open: boolean

  /**
   * Callback function to be called when the modal is open and closed.
   */
  onOpenChange: (open: boolean) => void
}

const BACKSPACE_KEY = 'Backspace'
const LEFT_KEY = 'ArrowLeft'
const RIGHT_KEY = 'ArrowRight'
const CODE_LENGTH = 5

type InputType = number | null

export const VerificationModal: React.FC<VerificationModalProps> = ({
  open = false,
  onOpenChange,
}) => {
  const inputRefs = React.useRef<HTMLInputElement[]>([])
  const [code, setCode] = React.useState<InputType[]>([])

  const changeInputFocus = (index: number) => {
    const ref = inputRefs.current[index]
    if (ref) {
      ref.focus()
    }
  }

  const onInputChange = (value: number | null, index: number) => {
    const temp = [...code]
    temp[index] = value
    setCode([...temp])
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const key = event.nativeEvent.code

    switch (key) {
      case BACKSPACE_KEY:
        event.preventDefault()
        onInputChange(null, index)
        changeInputFocus(index - 1)
        break
      case RIGHT_KEY:
        changeInputFocus(index + 1)
        break
      case LEFT_KEY:
        changeInputFocus(index - 1)
        break

      default:
        return
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.value.length > 1) return
    const value = Number(e.target.value)
    if (!isNaN(value)) {
      onInputChange(value, index)
      if (index < CODE_LENGTH - 1) {
        changeInputFocus(index + 1)
      }
    }
  }

  const onPasteNumber = (e: React.ClipboardEvent) => {
    const pasteValue = e.clipboardData.getData('Text')
    if (pasteValue.length === CODE_LENGTH && !isNaN(Number(pasteValue))) {
      setCode([...pasteValue.split('').map((e: string) => Number(e))])
    }
  }

  return (
    <>
      {open ? (
        <div className="relative m-auto px-8 py-10 bg-white  max-w-xl  z-20  transform translate-y-1/2 rounded-lg shadow-md">
          <p className="text-gray-700  font-bold text-2xl">Confirm your number</p>
          <p className="mt-4">We have sent you a code to your phone number (647)-123-***</p>
          <div className="flex  flex-wrap mt-12 space-x-2 sm:space-x-4">
            {new Array(CODE_LENGTH).fill(0).map((_, i) => (
              <input
                className="w-12 h-12  sm:text-xl mt-2 sm:w-16 sm:h-16 border border-gray-200 rounded-lg p-4 sm:p-6 hover:border-blue-500 focus:border-blue-500 focus:outline-none"
                key={i}
                type="number"
                ref={(el) => {
                  if (el) {
                    inputRefs.current[i] = el
                  }
                }}
                onKeyDown={(e) => onKeyDown(e, i)}
                value={code[i] || ''}
                onChange={(e) => onChange(e, i)}
                onPaste={onPasteNumber}
              ></input>
            ))}
          </div>
          <div className="flex mt-6 space-x-2">
            <p>Didn't receive a code?</p>
            <span className=" text-blue-500  cursor-pointer">Resend</span>
          </div>
          <style>
            {`
              input::-webkit-outer-spin-button,
              input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
            `}
          </style>
        </div>
      ) : null}
      {open && (
        <div
          className="fixed inset-0  bg-black bg-opacity-40  z-10"
          onClick={() => onOpenChange(false)}
        />
      )}
    </>
  )
}
