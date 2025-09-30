# MiniHTM for JavaScript/TypeScript

MiniHTM (Minimal Hyper-Text Markup) is a multi-language library meant to craft minimal HTML from basic function/method calls. Unlike most "libraries", you call our functions/methods. MiniHTM acts as a library, not a framework. This specific directory is the JavaScript/TypeScript port, which is written in TypeScript, and compiled to JavaScript for usage. All versions come with full type support.

If you are looking for another supported language, see [this list](https://github.com/boyninja1555/MiniHTM/blob/main/README.md).

## Documentation

As the current only maintainer of MiniHTM, I cannot seem to write documentation very well. Instead, I will provide a few examples in JavaScript and ES modules. Keep in mind this is done with Node.js, but if using Vite, it should work? I don't really know, I tested it all in a simple Node.js module.

**File-writing, dead simple**
```javascript
import fs from "fs"
import { h1, MiniHTM } from "@minihtm/node"

MiniHTM.config({})

const generated = h1("Hello, world!")
fs.writeFileSync("generated.html", generated)
```

```html
<h1>Hello, world!</h1>
```

**Console-logging, dead simple**
```javascript
import fs from "fs"
import { h1, MiniHTM } from "@minihtm/node"

MiniHTM.config({})

const generated = h1("Hello, world!")
console.log(generated)
```

```html
<h1>Hello, world!</h1>
```

**Console-logging, formatted (1)**
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

console.log(generated)
```

```html
<html>

<head>
    <title>Example</title>
</head>

<body>
    <h1>Hello, world!</h1>
</body>

</html>
```

**Console-logging, formatted (2)**
```javascript
import fs from "fs"
import { body, h1, headSection, html, MiniHTM } from "@minihtm/node"

MiniHTM.config({
    format: true,
})

const generated =
    html([
        headSection("Example"),
        body(
            h1("Hello, world!"),
        ),
    ])

console.log(generated)
```

```html
<html>

<head>
    <title>Example</title>
</head>

<body>
    <h1>Hello, world!</h1>
</body>

</html>
```

**Console-logging, unformatted**
```javascript
import fs from "fs"
import { body, h1, headSection, html, MiniHTM } from "@minihtm/node"

MiniHTM.config({
    format: false,
})

const generated =
    html([
        headSection("Example"),
        body(
            h1("Hello, world!"),
        ),
    ])

console.log(generated)
```

```html
<html><head><title>Example</title></head><body><h1>Hello, world!</h1></body></html>
```

**File-writing, formatted (1)**
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

```html
<html>

<head>
    <title>Example</title>
</head>

<body>
    <h1>Hello, world!</h1>
</body>

</html>
```

**File-writing, formatted (2)**
```javascript
import fs from "fs"
import { body, h1, headSection, html, MiniHTM } from "@minihtm/node"

MiniHTM.config({
    format: true,
})

const generated =
    html([
        headSection("Example"),
        body(
            h1("Hello, world!"),
        ),
    ])

fs.writeFileSync("generated.html", generated)
```

```html
<html>

<head>
    <title>Example</title>
</head>

<body>
    <h1>Hello, world!</h1>
</body>

</html>
```

**File-writing, unformatted**
```javascript
import fs from "fs"
import { body, h1, headSection, html, MiniHTM } from "@minihtm/node"

MiniHTM.config({
    format: false,
})

const generated =
    html([
        headSection("Example"),
        body(
            h1("Hello, world!"),
        ),
    ])

fs.writeFileSync("generated.html", generated)
```

```html
<html><head><title>Example</title></head><body><h1>Hello, world!</h1></body></html>
```
