# Technical Test : the main work 

# Setup nextjs with Eslint-airbnb and Husky

create nextjs app

`npx create-next-app@latest`

install eslint

`npm install eslint --save-dev` 

`npx eslint --init` 



install airbnb

```bash
npm install eslint-config-airbnb --save-dev
```

edit eslintrc.json

```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
      "airbnb/hooks",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended",
      "next"
      ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console": "error",
        "react/require-default-props": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "react/prop-types": "off", // If you're using TypeScript, prop-types are not needed
        "@typescript-eslint/explicit-module-boundary-types": "off", // Allows you to skip explicit return types in TypeScript
        "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }], // Only .tsx files for JSX
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            "js": "never",
            "jsx": "never",
            "ts": "never",
            "tsx": "never"
          }
        ],
        "import/no-unresolved": "off", // TypeScript takes care of this
        "react/react-in-jsx-scope": "off", // Not needed in Next.js
        "react/jsx-props-no-spreading": "off", // Allowing spread props
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "import/prefer-default-export": "off"
      },
      "settings": {
        "import/resolver": {
          "node": {
            "extensions": [".js", ".jsx", ".ts", ".tsx"]
          }
        }
      }
}
```

adding Husky : 

```bash
npx husky-init && npm install
```

inside husky/pre-commit

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint
```

Now when we run commit we maked sure that lint will run yaaaaaaaaaaay

docs that i used :

[https://javascript.plainenglish.io/creating-a-next-js-project-with-eslint-airbnb-style-guide-typescript-and-husky-ccf0f7ea0ba5](https://javascript.plainenglish.io/creating-a-next-js-project-with-eslint-airbnb-style-guide-typescript-and-husky-ccf0f7ea0ba5)

[https://typicode.github.io/husky/getting-started.html](https://typicode.github.io/husky/getting-started.html)

# setup the redux and create the logic

installed redux and redux toolkit

```bash
npm install @reduxjs/toolkit react-redux
```

created interfaces.ts :

created 2 objects : Product / CartItem

```tsx
export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  }

export interface CartItem {
    product: Product;
    monthsNumber: number;
  }
```

created store.ts :

-used configureStore from the reduxtoolkit to create our store and inside it we took CartSlice reducers as a reducer to of the store

-defined two TypeScript types, `RootState` and `AppDispatch`, which are used in a Redux store setup.

-then used those two types to define custom hooks, `useAppDispatch` and `useAppSelecto`

⇒ more safety 🙂

INSIDE THE CartSlice.ts 

here we implement the logic :

-created `CartState` :an array of `CartItem` objects.

-created `initialState` : initializing `cartItems` as an empty array.

-created `cartSlice` using `createSlice`  from reduxtoolkit. It has two reducers: `increment` and `decrement`. 

The `increment` to add a product to the cart or increase the number of months if it already exists in the cart. 

The `decrement` reducer is used to decrease the number of months in the cart or remove it from the cart if its zero.

-created `cartItems` : a selector that takes the global state of store.ts and returns the `cartItems` from the cart slice of the state

-created 3 redux selectors : 

`productMonthsNBInCartSelector` calculates and returns the number of months of a specific product in the cart

`totalCartItemsSelector` calculates and returns the total months NB of all products in the cart

`TotalPriceSelector` calculates and returns the total price of all products in the cart

-exported the actions and a reducer from a Redux slice 

# creating components :

-Providers.tsx : wraps its children with the Redux `Provider` component.

-layout.tsx : sets up the main structure of the app :

wraps any child components passed to `RootLayout` inside  Providers component

-created `data.ts`. This file is defining and exporting an array of product objects

---

-created `ProductCard` : displays information about a product.

---

-created `page.tsx` : 

we imported  `ProductCard`  

maps over the `data` array and returns a `ProductCard` component for each product

---

-created `AddToCartBtn.tsx` : allows users to add products to their cart and adjust the number of months of each product in the cart.

here we used The `productMonthsNBInCartSelector` selector

if monthsnumber is 0 or undefined ⇒ we return add to cart button

then we return `MonthsBtn` component :

the `onDecrease` and `onIncrease` props are function to dispatch actions `decrement` and `increment`

---

-created `CartBtn.tsx`  : displays a shopping bag icon and the total number of items in the cart.

we use the `totalCartItemsSelector` selector to get the total number of items in the cart from the Redux store.

if `totalItems` is not `0` or `undefined` it will displays the total number of items in the cart

then we added it to the headers.tsx 

---

inside it i created  `Page.tsx`: displays all the items in the cart and the total price of all the items : 

used the `TotalPriceSelector` selector to get total price of all the items in the cart from the redux store

mapped over an array of `cartItems`. For each `item` in `cartItems`  we `CartItemCard` component.

CartItemCard : displays the details of an item in the cart:

and add a `MonthsBtn` component to increase or decrease the number of months


the rest is small details like desgin ( used tailwind cuz of the short time and its already configured in nextJs)

---