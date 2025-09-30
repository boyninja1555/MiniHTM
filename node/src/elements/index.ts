export * from "./generic.js"
export * from "./div.js"
export * from "./p.js"
export * from "./h1.js"
export * from "./html.js"
export * from "./body.js"
export * from "./head.js"
export * from "./meta.js"
export * from "./link.js"
export * from "./title.js"

export type ElementNode = string

export interface ElementProps {
    attributes?: Record<string, any>
    selfClosing?: boolean
}
