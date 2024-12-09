import React from 'react'
import useTheme from '../context/theme'



function Themebtn() {

    const {themeMode,lightTheme,darkTheme}=useTheme()

    const themebtnclicked=(e)=>{
     const   ModeStatus=e.currentTarget.checked

      if (ModeStatus) {
        darkTheme()

      }
      else 
      lightTheme()
    }
  


  return (
    <div>
    <label class="relative inline-flex items-center cursor-pointer">

      <input 
      type="checkbox" 
      class="sr-only peer" 
      value="" 
      checked={themeMode==="dark"}
      onChange={themebtnclicked}

      />

      <div
        class="group peer bg-white rounded-full duration-300 w-16 h-8 ring-2 ring-black after:duration-300 after:bg-black peer-checked:after:bg-white peer-checked:ring-green-500 after:rounded-full peer-checked:bg-black after:absolute after:h-6 after:w-6 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-hover:after:scale-95"
      ></div>
    </label>
    </div>
  )
}

export default Themebtn