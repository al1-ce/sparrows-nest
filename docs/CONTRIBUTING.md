# Contributing Guidelines

#### Bug reporting 

Open an issue at [GitHub issue tracker](https://github.com/al1-ce/sparrows-nest/issues). Before doing that, ensure the bug was not already reported or fixed in `master` branch. Describe a problem and, if necessary, provide minimal code needed to reproduce it.

#### Bug fixing 

Open a new GitHub pull request with your patch. Provide a description of the problem and solution. Follow our [code style](#code-style-and-standards).

#### Implementing new features

New code should at least:
* work and behave the same way in at least Chrome and Firefox based browsers
* follow our [code style](#code-style-and-standards)
* not violate copyright/licensing..

Adding new external dependencies should be avoided as much as possible.

To contribute new feature:
1. Fork repository
2. Create new branch (optional)
3. Implement your feature
4. Open PR into master branch

#### Code style and standards 

* Use spaces instead of tabs. Each indentation level is 4 spaces
* There's always a space after control statements (`if`, `while`, `for`, etc...)
* Opening curly bracket should be on a **same** line
* Functions and variables should be in `camelCase`
* Classes, structs and enums should be in `PascalCase`
* `if () else if ()` can be split as `if () else\n if ()`
* Always describe symbols with jsdoc unless name is self-descriptive (for properties)

