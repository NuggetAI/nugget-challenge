import { useState } from 'react'

export const AllowAccessModal = () => {
  const [firstCheckbox, setFirstCheckbox] = useState(false)
  const [secondCheckbox, setSecondCheckbox] = useState(false)

  const isAllowed = firstCheckbox || secondCheckbox

  return (
    <div className="bg-white rounded-[10px] px-14 pt-12 pb-10">
      <div className="flex items-center max-w-[max-content] mb-8">
        <img alt="" src={require('../../public/assets/icons/alkemy.png')} />
        <img alt="" src={require('../../public/assets/icons/arrows.png')} />
        <img alt="" src={require('../../public/assets/icons/alpaca.png')} />
      </div>
      <p className="text-[#1C1D21] font-bold text-center text-[22px] mb-10">
        Connect Alkemy to Alpaca
      </p>
      <form>
        <p className="text-lg font-bold text-[#1C1D21] mb-6">Allow Alkemy to:</p>

        <div className="flex flex-col mb-10">
          <label className="mb-4">
            <input
              onChange={(e) => {
                setFirstCheckbox(e.target.checked)
              }}
              type="checkbox"
            />
            <span className="ml-2">Access to your account</span>
          </label>
          <label>
            <input
              onChange={(e) => {
                setSecondCheckbox(e.target.checked)
              }}
              type="checkbox"
            />
            <span className="ml-2">Place transactions on your behalf</span>
          </label>
        </div>

        <p className="text-sm text-[#757575] mb-10">
          By connecting this application to your account, you accept its Privacy Policy and Terms of
          Service.
        </p>

        <div className="items-center flex">
          <button className="text-[18px] text-[#1C1D21] mr-10" type="button">
            Cancel
          </button>

          <button
            disabled={!isAllowed}
            className={`rounded-[4px] text-white py-2 px-4 font-bold ${
              isAllowed ? 'bg-[#0E43FF]' : 'bg-[#C8D2F1]'
            }`}
            type="submit"
          >
            Allow access
          </button>
        </div>
      </form>
    </div>
  )
}
