import ReactDOMServer from "react-dom/server";
import type { PageContextBuiltIn } from 'vite-plugin-ssr';
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr";
import MDXComponentsProvider from "./context/MDXComponents";
import logoUrl from "./logo.svg";
import { PageShell } from "./PageShell";
import type { PageContext } from './types';

export { render };
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["pageProps"];

async function render(pageContext: PageContextBuiltIn & PageContext) {
    const { Page, pageProps } = pageContext;
    const pageHtml = ReactDOMServer.renderToString(
        <PageShell pageContext={pageContext}>
            <MDXComponentsProvider>
                <Page {...pageProps} />
            </MDXComponentsProvider>
        </PageShell>
    );

    // See https://vite-plugin-ssr.com/head
    const { documentProps } = pageContext;
    const title = (documentProps && documentProps.title) || "Vite SSR app";

    const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-content">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

    return {
        documentHtml,
        pageContext: {
            // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
        }
    };
}
