import { useEffect, useState } from "react";

export default function useIntersectionObserver(ref: any) {
  // const containerRef = useRef<any>(null);
  const [isComponentVisible, setIsComponentVisible] = useState<boolean>(false);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const onCallBack = (entries: any) => {
    const [entry] = entries;
    console.log(entry.boundingClientRect)
    if (entry.isIntersecting) {
      setIsComponentVisible(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onCallBack, options);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isComponentVisible;
}
