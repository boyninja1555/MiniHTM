import { type ElementNode } from "./index.js"
import { generic } from "./generic.js"

export function meta(name: string, attributes: Record<string, any>): ElementNode {
    attributes.name = name
    return generic("meta", [], {
        attributes: attributes,
        selfClosing: true,
    })
}
