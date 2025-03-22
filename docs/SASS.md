# SASS

Simply awesome style sheets

You already know how to use them since any css is valid sass, but let me tell you couple of new things.

## Structure

You now can put children directly into parents, kinda

```css

a {
    > b {}
    c {}
}

/* is equivalent to */

a {}
a > b {}
a c {}


```
## Variables

Aka C's macro or something or css variables but unchangable.

```css

$a: #fefefe;

a {
    color: $a;
}

/* out comes */

a {
    color: #fefefe;
}

```

Even better you can use them to "shadow" actual variables

```css
$main: var(--color-main);
```

## Inheritance

```css

%pseudo-element {
    color: red;
}

a {
    @extend %pseudo-element;
}

b {
    @extend %pseudo-element;
    background: blue;
}

/* compiles to */

a, b {
    color: red;
}

b {
    background: blue;
}

```
## Namespacing

```css
/* _lib/colors.scss */
$red: #fe0009;
$blue: #0909fe;

/* somefile.scss */
@use "_lib/colors";

a {
    color: colors.$red;
}

/* out comes */

a {
    color: #fe0009;
}

```

## Other stuff

There's also mixins and other things that you might want to learn about or not, but that's the main and nice parts.

Otherwise you can just write normal css and it will be all fine, just don't forget to compile it with "just build" or "make"

