import type { ElementNode } from "./elements/index.js"
import * as elements from "./elements/index.js"

export * from "./elements/index.js"

export interface MiniHTMOptions {
    format?: boolean
}

class MiniHTMClass {
    private configured = false
    private storedConfig: MiniHTMOptions | undefined

    /**
     * The MiniHTM API
     */
    constructor() { }

    /**
     * Configures MiniHTM with available options
     * @param format Should MiniHTM format generated HTML
     */
    public config({
        format = true,
    }: MiniHTMOptions): void {
        this.storedConfig = {
            format,
        }
        this.configured = true
    }

    /**
     * Gets the MiniHTM configuration
     * @returns MiniHTM configuration
     */
    public getConfig(): MiniHTMOptions {
        if (!this.configured || !this.storedConfig)
            throw new Error("MiniHTM must be configured to be used!")

        return this.storedConfig
    }

    /**
     * Checks if MiniHTM is configured
     */
    public isConfigured(): boolean {
        return this.configured
    }
}

export const MiniHTM = new MiniHTMClass()

/**
 * Generates a head section for basic pages
 * @param title The page title (required)
 * @param metadata Description, favicon, pwa, etc (optional)
 * @returns Element node
 */
export function headSection(title: string, metadata?: {
    description?: string
    favicon?: string
    pwa?: string
} | undefined): ElementNode {
    const elementList: ElementNode[] = [
        elements.title(title),
    ]

    if (metadata?.description)
        elementList.push(elements.meta("description", {
            content: metadata.description,
        }))

    if (metadata?.favicon)
        elementList.push(elements.link("stylesheet", metadata.favicon))

    if (metadata?.pwa)
        elementList.push(elements.link("manifest", metadata.pwa))

    return elements.head(elementList)
}
