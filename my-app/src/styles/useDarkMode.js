import {useState} from 'react'

export const useDarkMode = () => {
    const [theme,setTheme]=useState('dark')
    const toggleThem=()=>{
        theme==="dark"?setTheme('light'):setTheme('dark');
    }
  return [theme,toggleThem];
}
