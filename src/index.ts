import { makePlugin } from "@luna-park/plugin";

import icon from "./logo.svg";

export default makePlugin({
    id: "tailwind",
    name: "Tailwind",
    description: "",
    icon,
    inject: {
        js: ({ mode }) => {
            if (mode === "editor") {
                return `import tailwind from "@luna-park/tailwind-scope"; tailwind({scope: { from: "[data-root]" }});`;
            }
        }
    }
});
