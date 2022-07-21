import React from "react";
import ReactDOM from "react-dom/client";
import MDXComponentsProvider from "./context/MDXComponents";
import { PageShell } from "./PageShell";

export const clientRouting = true;
export { render };
export { onHydrationEnd };
export { onPageTransitionStart };
export { onPageTransitionEnd };

let root;

async function render(pageContext) {
    const { Page, pageProps } = pageContext;
    const page = (
        <PageShell pageContext={pageContext}>
            <MDXComponentsProvider>
                <Page {...pageProps} />
            </MDXComponentsProvider>
        </PageShell>
    );

    const container = document.getElementById("page-view");
    if (pageContext.isHydration) {
        root = ReactDOM.hydrateRoot(container, page);
    } else {
        if (!root) {
            root = ReactDOM.createRoot(container);
        }
        root.render(page);
    }
    document.title = "hello";
}

function onHydrationEnd() {
    console.log("Hydration finished; page is now interactive.");
}
function onPageTransitionStart() {
    console.log("Page transition start");
}
function onPageTransitionEnd() {
    console.log("Page transition end");
}
