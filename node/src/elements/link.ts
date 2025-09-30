import { type ElementNode } from "./index.js"
import { generic } from "./generic.js"

export function link(rel: string, href: string): ElementNode {
    return generic("meta", [], {
        attributes: {
            rel: rel,
            href: href,
        },
        selfClosing: true,
    })
}
