import MDXComponentsProvider from "@/renderer/context/MDXComponents";
import { PageShell } from "@/renderer/PageShell";
import type { PageContext } from "@/renderer/types";
import ReactDOM from "react-dom/client";
import type { PageContextBuiltInClient } from "vite-plugin-ssr/client/router";

export const clientRouting = true;
export { render };
export { onHydrationEnd };
export { onPageTransitionStart };
export { onPageTransitionEnd };

let root: ReactDOM.Root;

async function render(pageContext: PageContextBuiltInClient & PageContext) {
    const { Page, pageProps } = pageContext;
    const page = (
        <PageShell pageContext={pageContext}>
            <MDXComponentsProvider>
                <Page {...pageProps} />
            </MDXComponentsProvider>
        </PageShell>
    );

    const container = document.getElementById("page-content") as HTMLElement;
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
    document.querySelector("#page-content")!.classList.add("page-transition");
}

function onPageTransitionEnd() {
    console.log("Page transition end");
    document.querySelector("#page-content")!.classList.remove("page-transition");
}
