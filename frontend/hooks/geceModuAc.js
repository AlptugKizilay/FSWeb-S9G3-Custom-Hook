import { useState } from "react";
import localStorageKullan from "./localStorageKullan";

const geceModuAc = (initialValue) => {
    const  [value,setValue] = localStorageKullan("dark-mode",initialValue);
    const changeHandler = (e) => {
        e.preventDefault();        
        setValue(!value);
    }
    return [value,changeHandler];
}
export default geceModuAc;