import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { IJobsProps, IOptions } from '../Interfaces/Interfaces'
import { ButtonList } from '../components'

const Job: React.FC<IJobsProps> = () => {
  const [nameButton, setNameButton] = useState<string>('Active')
  const [options, setOptions] = useState<IOptions[]>([])
  const [show, setShow] = useState<boolean>(false)

  const handlerChangeButton = () => {
    setNameButton('Completed')
    setShow(false)
    setOptions([])
  }
  useEffect(() => {
    const options = [
      { color: 'blue', label: 'Draft' },
      { color: 'yellow', label: 'Active' },
      { color: 'green', label: 'Complete' },
      { color: 'violet', label: 'Archive' },
    ]
    setOptions(options)
  }, [])

  return (
    <StyleJobs>
      <ButtonList
        options={options}
        nameButton={nameButton}
        handlerChangeButton={handlerChangeButton}
        show={show}
        setShow={setShow}
      />
    </StyleJobs>
  )
}

Job.defaultProps = {}

export { Job }
const StyleJobs = styled.div``
