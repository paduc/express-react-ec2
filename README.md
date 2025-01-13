# React + TypeScript + Tailwind CSS + TanStack Router + tRPC

## Local development

### Start the app
```
cd app
yarn dev
```

### Start the server
```
cd server
yarn dev
```

### Open the app in the browser
```
open http://localhost:3001
```

## Production

```
cd app
yarn install
yarn build

cd ../server
yarn install
yarn start
```

## History

```
yarn create @tanstack/router
```
chose vite

### Installed tailwind

```
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Moved tsconfig.json to root

### Fix error in vite.config.ts
```
yarn add -D @types/node
```

### Created index.css in app/src
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Removed script in index.html

```
<script src="https://cdn.tailwindcss.com"></script>
```

### Added content in tailwind.config.js
```
content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
```

### Imported index.css in main.tsx
```
import './index.css'
```

### Called shadcn/ui
```
npx shadcn@latest init
```

### Added a button from shadcn/ui

```
npx shadcn@latest add button
```

### Started server with minimal express server, launched with tsx

## How to configure AWS ECR/ECS/Fargate

### Create a Docker image

```
docker build -t wavo-app .
```

### Run the Docker image

```
docker run -it -p 3000:3000 wavo-app
```
