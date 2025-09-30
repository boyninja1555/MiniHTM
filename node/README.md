# MiniHTM for JavaScript/TypeScript

MiniHTM (Minimal Hyper-Text Markup) is a multi-language library meant to craft minimal HTML from basic function/method calls. Unlike most "libraries", you call our functions/methods. MiniHTM acts as a library, not a framework. This specific directory is the JavaScript/TypeScript port, which is written in TypeScript, and compiled to JavaScript for usage. All versions come with full type support.

If you are looking for another supported language, see [this list](https://github.com/boyninja1555/MiniHTM/blob/main/README.md).

## Documentation

### Installation

```bash
npm install @minihtm/node # For the losers
npm i @minihtm/node # For the winners
```

As the current only maintainer of MiniHTM, I cannot seem to write documentation very well. Instead, I will provide a few examples in JavaScript and ES modules, plus a few tips. Keep in mind this is done with Node.js, but if using Vite, it should work? I don't really know, I tested it all in a simple Node.js module.

### Formatting control
To control formatting, MiniHTM provides that option in its configuration. You can define the config like below:

```javascript
import { MiniHTM } from "@minihtm/node"

MiniHTM.config({ format: true, }) // Formatting enabled
MiniHTM.config({ format: false, }) // Formatting disabled
MiniHTM.config({}) // Formatting enabled (default + required)
```

Keep in mind that calling `MiniHTM.config({})` is required, but defaults are available. By default, `format` is set to `true`.

### Small example

**Console logging**
```javascript
import { h1, MiniHTM } from "@minihtm/node"

MiniHTM.config({})

const generated = h1("Hello, world!")
console.log(generated)
```

**File writing**
```javascript
import fs from "fs"
import { h1, MiniHTM } from "@minihtm/node"

MiniHTM.config({})

const generated = h1("Hello, world!")
fs.writeFileSync("generated.html", generated)
```

### Full example

**Console logging**
```javascript
import { body, h1, headSection, html, MiniHTM } from "@minihtm/node"

MiniHTM.config({})

const generated =
    html([
        headSection("Example"),
        body(
            h1("Hello, world!"),
        ),
    ])

console.log(generated)
```

**File writing**
```javascript
import fs from "fs"
import { body, h1, headSection, html, MiniHTM } from "@minihtm/node"

MiniHTM.config({})

const generated =
    html([
        headSection("Example"),
        body(
            h1("Hello, world!"),
        ),
    ])

fs.writeFileSync("generated.html", generated)
```
