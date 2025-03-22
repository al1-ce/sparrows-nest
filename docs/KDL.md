# KDL

## Why

I like the format (it's sub/super-set of SDLang) and XML is crap

## What you need to know

### Elements

```html

!doctype "html"

html {
    head {
        title "something"
        style r"
            a: {color:red;}
        "
    }
    body {
        p "stuff stuff"
        "automatic p i think maybe"
        div id="divvvv" {
            img src="no"
        }
    }
}

Just your typical stuff with two exceptions. Inner content can be text

```
div "asdf"
```

Or list of children

```
div {
    p "text"
    h2 "header"
}
```

## What else

```c
// a.kdl

title "something"
script src="a.js"

// a.md
## Super header
something else
---
[wow](wow.com)

// b.kdl

@include "a.kdl"
@include "a.md"

// c.kdl

@include "a.kdl"

```

Imports, quite useful. That's mostly it, look at existing files for more how or what.

Sometimes to get things working, in some dumb cases, you need to specify empty content:

```c
textarea placeholder="not visible unless there's quotes at end" "" // <- these quotes are needed to see placeholder
```
