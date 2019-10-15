# prettier-plugin-import-sort-arg-decorator-bug

[![Build Status](https://travis-ci.org/bbenoist/prettier-plugin-import-sort-arg-decorator-bug.svg?branch=master)](https://travis-ci.org/bbenoist/prettier-plugin-import-sort-arg-decorator-bug)

Reproducible [prettier-plugin-import-sort](https://github.com/ggascoigne/prettier-plugin-import-sort/) bug with TypeScript argument decorators.

[prettier-plugin-import-sort#3](https://github.com/ggascoigne/prettier-plugin-import-sort/issues/3)

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

Gives this error ([full log](https://travis-ci.org/bbenoist/prettier-plugin-import-sort-arg-decorator-bug)):

```txt
$ npm run-script lint
> eslint --ext .jsx,.js,.ts,.tsx .
...
src/index.ts
  6:16  error  Parsing error: Stage 2 decorators cannot be used to decorate parameters  prettier/prettier
...
```
