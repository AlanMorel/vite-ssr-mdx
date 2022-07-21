import type { PageContext } from "@/renderer/types";
import React, { useContext } from "react";

export { PageContextProvider };
export { usePageContext };

const Context = React.createContext<PageContext>(undefined as any);

function PageContextProvider({ pageContext, children }: { pageContext: PageContext; children: React.ReactNode }) {
    return <Context.Provider value={pageContext}>{children}</Context.Provider>;
}

function usePageContext() {
    return useContext(Context);
}
