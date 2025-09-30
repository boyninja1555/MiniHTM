import { type ElementNode, type ElementProps } from "./index.js"
import { generic } from "./generic.js"

export function h1(children: ElementNode[] | ElementNode, element?: ElementProps): ElementNode {
    return generic("h1", typeof children === "string" ? [children] : children, element)
}
