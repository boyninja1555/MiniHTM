import { type ElementNode, type ElementProps } from "./index.js"
import { generic } from "./generic.js"

export function body(children: ElementNode[] | ElementNode, element?: ElementProps): ElementNode {
    return generic("body", typeof children === "string" ? [children] : children, element)
}
