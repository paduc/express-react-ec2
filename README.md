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

## Created index.css in app/src
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Removed script in index.html

```
<script src="https://cdn.tailwindcss.com"></script>
```

## Added content in tailwind.config.js
```
content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
```

## Imported index.css in main.tsx
```
import './index.css'
```

## Called shadcn/ui
```
npx shadcn@latest init
```

## Added a button from shadcn/ui

```
npx shadcn@latest add button
```

## Started server with minimal express server, launched with tsx