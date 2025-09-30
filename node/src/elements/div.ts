import type { ElementNode, ElementProps } from "./index.js"
import { generic } from "./generic.js"

export function div(children: ElementNode[] | ElementNode, element?: ElementProps): ElementNode {
    return generic("div", typeof children === "string" ? [children] : children, element)
}
