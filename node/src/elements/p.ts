import { type ElementNode, type ElementProps } from "./index.js"
import { generic } from "./generic.js"

export function p(children: ElementNode[] | ElementNode, element?: ElementProps): ElementNode {
    return generic("p", typeof children === "string" ? [children] : children, element)
}
