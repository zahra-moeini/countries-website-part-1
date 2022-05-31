import { useState,useEffect } from "react";

 const UseDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
        window.localStorage.setItem('theme','dark')
        setTheme('dark')
    }
    else{
        window.localStorage.setItem('theme','light')
        setTheme('light')
    }
  };
  useEffect(()=>{
const localTheme=window.localStorage.getItem('theme')
if(localTheme){
    setTheme(localTheme)
}
  },[])

  return[theme,toggleTheme]
};
export default UseDarkMode()