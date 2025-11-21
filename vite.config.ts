import { defineConfig, type UserConfig } from "vite";

import packageDefinition from "./package.json" with { type: "json" };

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
                external: [...Object.keys(packageDefinition.peerDependencies || {})]
            }
        },
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
