import vue from "@vitejs/plugin-vue";
import { defineConfig, type UserConfig } from "vite";
import cssInjectedByJs from "vite-plugin-css-injected-by-js";

export default defineConfig(() => {
    const config: UserConfig = {
        build: {
            lib: {
                entry: "src/index.ts",
                fileName: "index",
                formats: ["es"],
                name: "@luna-park/plugin-tailwind"
            },
            rollupOptions: {
                external: ["vue"]
            }
        },
        plugins: [
            vue(),
            cssInjectedByJs({
                dev: {
                    enableDev: true
                }
            })
        ],
        preview: {
            allowedHosts: [
                "localhost",
                "127.0.0.1",
                "https://luna-park.app"
            ],
            host: "127.0.0.1",
            port: 2084
        }
    };

    return config;
});
