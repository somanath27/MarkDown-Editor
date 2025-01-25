import React, { createContext, useContext, useState, ReactNode } from "react";

interface MarkdownContextType {
  markdownText: string;
  setMarkdown: (text: string) => void;
}

const defaultContext: MarkdownContextType = {
  markdownText: "",
  setMarkdown: () => {
    console.warn("setMarkdown function is not implemented");
  },
};


const MarkdownContext = createContext<MarkdownContextType>(defaultContext);


interface MarkdownProviderProps {
  children: ReactNode;
}

export const MarkdownProvider: React.FC<MarkdownProviderProps> = ({
  children,
}) => {
  const [markdownText, setMarkdownText] = useState<string>("");

  const setMarkdown = (text: string) => {
    setMarkdownText(text);
  };

  const contextValue = React.useMemo(() => ({ markdownText, setMarkdown }), [markdownText]);

  return (
    <MarkdownContext.Provider value={contextValue}>
      {children}
    </MarkdownContext.Provider>
  );
};

// Custom hook for accessing the context
// eslint-disable-next-line react-refresh/only-export-components
export const useMarkdownContext = (): MarkdownContextType => {
  const context = useContext(MarkdownContext);
  if (!context) {
    throw new Error(
      "useMarkdownContext must be used within a MarkdownProvider"
    );
  }
  return context;
};
