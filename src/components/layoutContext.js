import * as React from "react"
import {useState, createContext, useMemo, useEffect} from "react"

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
 
  const breakpoints = useBreakpoints({
    xs: {min: 0, max: 479},
    sm: {min: 480, max: 767},
    md: {min: 768, max: 1023},
    lg: {min: 1024, max: 1279},
    xl: {min: 1280, max: 1535},
    xxl: {min: 1536, max: null},
  });

  useEffect(() => {
    editContext( breakpoints );
  });
  
  useEffect(() => {
    const loadEvent = () => {
      console.log('page is fully loaded');
    }
    window.addEventListener("load", loadEvent);
    return _ => {
      window.removeEventListener('load', loadEvent);
    };
  }, []);
  
  useEffect(() => {
    console.log(context.breakpoints);
    console.log(context.firstLoadDone);
  })
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