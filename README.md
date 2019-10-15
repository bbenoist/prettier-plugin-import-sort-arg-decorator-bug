# prettier-plugin-import-sort-arg-decorator-bug

[![Build Status](https://travis-ci.org/bbenoist/prettier-plugin-import-sort-arg-decorator-bug.svg?branch=import-sort-cli)](https://travis-ci.org/bbenoist/prettier-plugin-import-sort-arg-decorator-bug)

Reproducible [import-sort-cli](https://github.com/renke/import-sort/) bug with TypeScript argument decorators.

[import-sort-cli#?????](https://github.com/renke/import-sort/issues/?????)

The following valid TypeScript code:

```ts
function ArgDecorator(_target: Record<string, any>, _propertyKey: string | symbol, _parameterIndex: number): void {
    console.log(_target, _propertyKey, _parameterIndex)
}

class MyClass {
    myFunction(@ArgDecorator myArg: string){
        console.log(myArg);
    }
}

const foo = new MyClass;
foo.myFunction("hello");
```

Gives this error ([full log (branch `import-sort-cli`)](https://travis-ci.org/bbenoist/prettier-plugin-import-sort-arg-decorator-bug)):

```txt
$ npm run-script import-sort-cli
> import-sort-cli
...
> import-sort src/*.ts

src/index.ts:
SyntaxError: Stage 2 decorators cannot be used to decorate parameters (10:13)
...
```
