## Started with TanStack Router 

```
yarn create @tanstack/router
```
chose vite

## Installed tailwind

```
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Moved tsconfig.json to root

## Fix error in vite.config.ts
```
yarn add -D @types/node
```

## Shadcn/ui: Changed alias in tsconfig.json

```
"baseUrl": ".",
"paths": {
  "@/*": ["app/src/*"]
}
```

## Shadcn/ui: Changed alias in vite.config.ts

```
resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src/client"),
  },
},
```

## Added shadcn/ui

```
npx shadcn@latest init
```

## Added a button from shadcn/ui

```
npx shadcn@latest add button
```