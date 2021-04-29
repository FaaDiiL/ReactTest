import { useState, useEffect } from 'react'

const ComponentA = () => {
  const [button, setButton] = useState({})

  /** Runs only once */
  useEffect(() => {
    /** Initialize the background-color value for the component if there is something from localStorage */
    setButton(
      /* Check if there is a saved state for the background-color in localStorage */
      localStorage.getItem('componentAIsDefaultColor')
        ? /** If Found - Set state as default */
          {
            isDefaultColor: JSON.parse(
              localStorage.getItem('componentAIsDefaultColor')
            ),
          }
        : /** Else - Set state to the default value */
          { isDefaultColor: true }
    )
  }, [])

  const handleClick = () => {
    setButton({ isDefaultColor: !button.isDefaultColor })
    window.localStorage.setItem(
      'componentAIsDefaultColor',
      JSON.stringify(!button.isDefaultColor)
    )
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
