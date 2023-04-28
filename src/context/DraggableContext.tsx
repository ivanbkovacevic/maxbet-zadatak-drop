import React, { useEffect } from "react";

interface DraggableContextState {
  scrollFromTop: number;
}

interface DraggableContextStateProps {
  state: DraggableContextState;
}

const DraggableContext = React.createContext<DraggableContextStateProps>({
  state: { scrollFromTop: 0 },
});

function DraggableContextProvider(props: React.PropsWithChildren<{}>) {
  const [state, setState] = React.useState<DraggableContextState>({
    scrollFromTop: 111,
  });

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setState((prevState) => ({ ...prevState, scrollFromTop: scrollTop }));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <DraggableContext.Provider
      value={{
        state,
      }}
    >
      {props.children}
    </DraggableContext.Provider>
  );
}

export { DraggableContext, DraggableContextProvider };
