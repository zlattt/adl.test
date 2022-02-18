import {useState, useEffect} from "react"

function useRefDimensions(ref) {

  const [dimensions, setDimensions] = useState();

  const getDimensions = ref => ({
          height: ref.current.offsetHeight,
          borderB: window.getComputedStyle(ref.current)
            .getPropertyValue('border-bottom-width')
        });
  
  useEffect(() => {setDimensions(getDimensions(ref))}, [ref]);
  
  useEffect(() => {

    let timeoutId = null;

    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setDimensions(getDimensions(ref)), 150);
    };
    
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    }

  }, [ref])

  //consider useEffect second argument use clarification

  return dimensions;

}

export default useRefDimensions;