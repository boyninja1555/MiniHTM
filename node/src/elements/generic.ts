import type { ElementNode, ElementProps } from "./index.js"
import { MiniHTM } from "../index.js"
import beautify from "js-beautify"

export function generic(name: string, children: ElementNode[] = [], element: Partial<ElementProps> = {}): ElementNode {
    if (!MiniHTM.isConfigured())
        throw new Error("MiniHTM must be configured to be used!")

    const attrs = Object.keys(element.attributes ?? {})
        .map(key => ` ${key}="${(element.attributes ?? {})[key]}"`)
        .join("")

    if (element.selfClosing)
        return `<${name}${attrs} />`

    let result = `<${name}${attrs}>${children.join("")}</${name}>`

    if (MiniHTM.getConfig().format)
        return beautify.html_beautify(result)
    else
        return result
}
