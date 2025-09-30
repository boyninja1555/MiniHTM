import { type ElementNode, type ElementProps } from "./index.js"
import { generic } from "./generic.js"

export function title(children: ElementNode[] | ElementNode, element?: ElementProps): ElementNode {
    return generic("title", typeof children === "string" ? [children] : children, element)
}
