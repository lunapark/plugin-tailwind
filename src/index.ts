import { makePlugin } from "@luna-park/plugin";
import tailwind from "@luna-park/tailwind-scope";

import icon from "./logo.svg";

export default makePlugin({
    description: "",
    icon,
    id: "tailwind",
    lifecycle: {
        mount: () => {
            tailwind({ scope: { from: "[data-root]" } });
        }
    },
    name: "Tailwind"
});
