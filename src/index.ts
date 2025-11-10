import { makePlugin } from "@luna-park/plugin";

import icon from "./logo.svg";

export default makePlugin({
    description: "",
    icon,
    id: "tailwind",
    inject: {
        js: ({ mode }) => {
            if (mode === "editor") {
                return `import tailwind from "@luna-park/tailwind-scope"; tailwind({scope: { from: "[data-root]" }});`;
            }
        }
    },
    name: "Tailwind"
});
