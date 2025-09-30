import { type ElementNode, type ElementProps } from "./index.js"
import { generic } from "./generic.js"

export function head(children: ElementNode[] | ElementNode, element?: ElementProps): ElementNode {
    return generic("head", typeof children === "string" ? [children] : children, element)
}
