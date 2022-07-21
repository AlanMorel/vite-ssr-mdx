import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import ssr from "vite-plugin-ssr/plugin";

export default defineConfig(async () => {
    const mdx = await import("@mdx-js/rollup");
    return {
        optimizeDeps: {
            include: ["react/jsx-runtime"]
        },
        plugins: [react(), mdx.default({ remarkPlugins: [] }), ssr()],
        build: {
            rollupOptions: {
                output: {
                    format: "es"
                }
            }
        }
    };
});
