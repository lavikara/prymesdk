## Table of Contents

- [Features](#features)
- [Installing](#installing)
  - [Package manager](#package-manager)
- [Example](#example)

## Features

- Fund any account using virtual account from the browser
- Fund any account using virtual account from node.js

## Installing

### Package manager

Using npm:

```bash
$ npm install @primebank/primebank
```

Using yarn:

```bash
$ yarn add @primebank/primebank
```

Once the package is installed, you can import the library using `import` or `require` approach:

```js
import primebank from "@primebank/primebank";
OR;
import { fundWithVirtualAccount } from "@primebank/primebank";
```

```js
const primebank = require("@primebank/primebank");
```

## Example

```js
import { fundWithVirtualAccount } from "@primebank/primebank";

// Make a request to generate virtual account
const details = {
  reference: "29F83ND82JD0",
  amount: "10000000",
  email: "customer@gmail.com",
  fullName: "Adewale Johnson",
  phone: "+2348144582144",
};
fundWithVirtualAccount("apiKey", details, options)
  .then((response) => {
    // handle success
    console.log(response);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  });

// Want to use async/await? Add the `async` keyword to your outer function/method.
const generateVirtualAccount = async () => {
  try {
    const response = await fundWithVirtualAccount("apiKey", details, options);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

// Optionally the request above could also be done as
import primebank from "@primebank/primebank";
//const primebank = require('@primebank/primebank'); // legacy way

const details = {
  reference: "29F83ND82JD0",
  amount: "10000000",
  email: "customer@gmail.com",
  fullName: "Adewale Johnson",
  phone: "+2348144582144",
};
primebank
  .fundWithVirtualAccount("apiKey", details, options)
  .then((response) => {
    // handle success
    console.log(response);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  });

// Want to use async/await? Add the `async` keyword to your outer function/method.
const generateVirtualAccount = async () => {
  try {
    const response = await primebank.fundWithVirtualAccount(
      "apiKey",
      details,
      options
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```

> **Note**: `async/await` is part of ECMAScript 2017 and is not supported in Internet
> Explorer and older browsers, so use with caution.
