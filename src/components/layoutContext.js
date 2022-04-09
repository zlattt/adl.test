import * as React from "react"
import {useState, createContext, useMemo} from "react"

import { useBreakpoints, useCurrentWidth } from '../components/react-breakpoints-hook';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  },
};

const defaultContext = {
  theme: themes.light,
  //headerHeight: {},
  //breakpoints: {},
  //{ xs:{}, sm:{}, md:{}, lg:{}, xl:{}, xxl:{} },
};



const LayoutContext = createContext();

const LayoutContextCustomProvider = ({ children }) => {

  const [context, setContext] = useState(defaultContext);

  const editContext = ( value ) => {
    //if (context[keyName] !== value) { 
    //  context[keyName] = value;
    //  setContext({...(context)});
    //}
    const flag = { edited: false };
    const newContext = deepMerge(value, context, flag);
    
    if (flag.edited === true) {
      setContext({ ...newContext })
    };

  }

  const deepMerge = (value, context, flag) => {
    
    if ( typeof value === "object" ) {

      Object.keys(value).forEach( key => {
        context[key] = deepMerge(value[key], context[key], flag);
      });
      return context;

    } else { 

        if ( !(context === value) ) {
          flag.edited = true;
        }
        return value;

    }
  
  }
 
  context.breakpoints = useBreakpoints({
    xs: {min: 0, max: null},
    sm: {min: 480, max: null},
    md: {min: 768, max: null},
    lg: {min: 1024, max: null},
    xl: {min: 1280, max: null},
    xxl: {min: 1536, max: null},
  });

  //console.log(context.breakpoints);

  //const contextValue = useMemo(() => ({
  //  context
  //}), [context])

return (
  <LayoutContext.Provider value={ [context, editContext] }>
    {children}
  </LayoutContext.Provider>
)};

export { LayoutContext, LayoutContextCustomProvider }
export default LayoutContext