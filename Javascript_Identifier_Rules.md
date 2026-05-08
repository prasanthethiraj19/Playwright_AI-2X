# JavaScript Identifier Rules

Identifiers are names used for variables, functions, objects, and classes in JavaScript. Here are the rules and examples:

## Rules for JavaScript Identifiers

1. **Must start with a letter, underscore (_), or dollar sign ($)**
   - Cannot start with a number

2. **Subsequent characters can be letters, digits, underscores, or dollar signs**
   - Letters include a-z, A-Z
   - Digits are 0-9
   - Can contain underscores and dollar signs anywhere

3. **Identifiers are case-sensitive**
   - `myVar` and `myvar` are different identifiers

4. **Cannot use reserved keywords**
   - Reserved words cannot be used as identifiers

5. **No spaces allowed in identifiers**

6. **Cannot contain special characters** (except _ and $)

## Valid Examples

```javascript
// Starting with letter
var name = "John";
let firstName = "John";
const lastName = "Doe";

// Starting with underscore
var _privateVar = 100;
let __privateVar = 200;

// Starting with dollar sign
var $amount = 50;
let $totalPrice = 100;

// With numbers in the middle
var user1 = "Alice";
let variable123 = "test";
const price_2024 = 999;

// Camel case (common convention)
var myVariableName = "example";
let calculateTotal = 50;
const getUserData = () => {};

// Pascal case (for class names - convention)
class MyClass {}
class UserProfile {}

// Snake case (alternative convention)
var my_variable_name = "example";
let user_profile_data = {};

// Mixed with $ and _
var $_variable = 100;
let _$data = "value";
const $__test = true;
```

## Invalid Examples

```javascript
// ❌ Starting with a number
var 1name = "John";  // INVALID
let 2variable = 50;  // INVALID

// ❌ Using spaces
var my variable = "test";  // INVALID
let first name = "John";   // INVALID

// ❌ Using special characters (except _ and $)
var my-var = 100;      // INVALID (hyphen)
let my@var = 200;      // INVALID (@ symbol)
const my#value = 50;   // INVALID (# symbol)

// ❌ Using reserved keywords
var if = 10;           // INVALID (if is reserved)
let class = "test";    // INVALID (class is reserved)
const return = 5;      // INVALID (return is reserved)

// ❌ Empty identifier
var = 100;             // INVALID
```

## JavaScript Reserved Keywords

```
abstract   arguments  await      boolean
break      byte       case       catch
char       class      const      continue
debugger   default    delete     do
double     else       enum       eval
export     extends    false      final
finally    float      for        function
goto       if         implements import
in         instanceof int        interface
let        long       native     new
null       package    private    protected
public     return     short      static
super      switch     synchronized this
throw      throws     transient  true
try        typeof     var        void
volatile   while      with       yield
```

## Naming Conventions

### camelCase (Recommended for variables and functions)
```javascript
let firstName = "John";
let totalAmount = 1000;
function calculateTotal() {}
const getUserData = () => {};
```

### PascalCase (For classes and constructors)
```javascript
class UserProfile {}
class EmployeeData {}
const user = new UserProfile();
```

### UPPER_SNAKE_CASE (For constants)
```javascript
const MAX_USERS = 100;
const API_KEY = "your-api-key";
const DATABASE_URL = "mongodb://...";
```

### kebab-case (NOT used in JavaScript - avoided)
```javascript
// ❌ NOT valid in JavaScript
// let my-variable = 10;  // INVALID
```

## Tips and Best Practices

1. **Use meaningful names** - Choose names that describe the purpose
   ```javascript
   // Good
   let userAge = 25;
   let isActive = true;
   
   // Bad
   let x = 25;
   let flag = true;
   ```

2. **Be consistent** - Use the same naming convention throughout your project

3. **Avoid single letters** - Except for loop variables (i, j, k)
   ```javascript
   // Good
   for (let index = 0; index < arr.length; index++) {}
   
   // Acceptable
   for (let i = 0; i < arr.length; i++) {}
   ```

4. **Avoid ambiguous names** - Don't use similar names that can cause confusion
   ```javascript
   // Avoid
   let l = 10;     // lowercase L looks like 1
   let O = 20;     // uppercase O looks like 0
   ```

5. **Use prefixes for booleans** - Helps identify boolean variables
   ```javascript
   let isActive = true;
   let hasPermission = false;
   let canEdit = true;
   ```

## Examples Summary

| Category | Example | Valid? |
|----------|---------|--------|
| Letter start | `name` | ✅ Yes |
| Underscore start | `_name` | ✅ Yes |
| Dollar sign start | `$name` | ✅ Yes |
| Number start | `1name` | ❌ No |
| With numbers | `name1` | ✅ Yes |
| With spaces | `my name` | ❌ No |
| Reserved keyword | `var if = 5` | ❌ No |
| Special chars | `my-name` | ❌ No |
| camelCase | `myVariableName` | ✅ Yes |
