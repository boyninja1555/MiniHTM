import { type ElementNode, type ElementProps } from "./index.js"
import { generic } from "./generic.js"

export function html(children: ElementNode[] | ElementNode, element?: ElementProps): ElementNode {
    return generic("html", typeof children === "string" ? [children] : children, element)
}
