import { useState } from 'react'

const ComponentA = () => {
  const [button, setButton] = useState({ isDefaultColor: true })

  const handleClick = () => {
    setButton({ isDefaultColor: !button.isDefaultColor })
  }

  return (
    <div
      className={button.isDefaultColor ? 'component' : 'component lightPink'}
    >
      <p className={'component_title'}> Component A </p>
      <button onClick={handleClick}>Change background color</button>
    </div>
  )
}

export default ComponentA
