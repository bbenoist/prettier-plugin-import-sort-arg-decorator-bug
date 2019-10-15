function ArgDecorator(
  _target: Record<string, any>,
  _propertyKey: string | symbol,
  _parameterIndex: number
): void {
  console.log(_target, _propertyKey, _parameterIndex);
}

class MyClass {
  myFunction(@ArgDecorator myArg: string) {
    console.log(myArg);
  }
}

const foo = new MyClass();
foo.myFunction("hello");
