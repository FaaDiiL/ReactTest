import { useContext, useEffect, useState } from 'react'

import { UserContext } from '../../userContext/UserContext'

const ComponentB = () => {
  const [button, setButton] = useState({})
  const {typedText} = useContext(UserContext)



  /** Runs only once */
  useEffect(() => {
    /** Initialize the background-color value for the component if there is something from localStorage */
    setButton(
      /* Check if there is a saved state for the background-color in localStorage */
      localStorage.getItem('componentBIsDefaultColor')
        ? /** If Found - Set state as default */
          {
            isDefaultColor: JSON.parse(
              localStorage.getItem('componentBIsDefaultColor')
            ),
          }
        : /** Else - Set state to the default value */
          { isDefaultColor: true }
    )
  }, [])

  const handleClick = () => {
    setButton({ isDefaultColor: !button.isDefaultColor })
    window.localStorage.setItem(
      'componentBIsDefaultColor',
      JSON.stringify(!button.isDefaultColor)
    )
  }

  return (
    <div
      className={button.isDefaultColor ? 'component' : 'component lightPink'}
    >
      <p className={'component_title'}> Component B </p>
      {typedText}
      <button onClick={handleClick}>Change background color</button>
    </div>
  )
}

export default ComponentB
