export const basicQuestions = [
    {
      id: 1,
      question: "What is Next.js?",
      options: [
        "A JavaScript library for building user interfaces",
        "A React framework for production",
        "A database management system",
        "A CSS framework"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Which of the following is NOT a feature of Next.js?",
      options: [
        "Server-side rendering",
        "Static site generation",
        "Built-in CSS support",
        "Native mobile app development"
      ],
      correctAnswer: 3
    },
    {
      id: 3,
      question: "What is the purpose of the 'pages' directory in a Next.js project?",
      options: [
        "To store static assets",
        "To define API routes",
        "To store React components that represent pages",
        "To configure the build process"
      ],
      correctAnswer: 2
    },
    {
      id: 4,
      question: "How do you create a dynamic route in Next.js?",
      options: [
        "By using the useRouter hook",
        "By creating a file with square brackets in its name",
        "By adding a 'dynamic' property to the page component",
        "By using the Link component"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "What is the purpose of the '_app.js' file in Next.js?",
      options: [
        "To define global styles",
        "To create API routes",
        "To configure the database",
        "To initialize the application and wrap all pages"
      ],
      correctAnswer: 3
    },
    {
      id: 6,
      question: "What is the purpose of the 'public' directory in a Next.js project?",
      options: [
        "To store server-side code",
        "To store static assets that can be served directly",
        "To define API routes",
        "To store configuration files"
      ],
      correctAnswer: 1
    },
    {
      id: 7,
      question: "How do you create a new Next.js project?",
      options: [
        "npm init next-app",
        "create-react-app my-next-app",
        "next create my-app",
        "npx create-next-app"
      ],
      correctAnswer: 3
    },
    {
      id: 8,
      question: "What is the purpose of the 'Link' component in Next.js?",
      options: [
        "To create external links",
        "To style anchor tags",
        "To enable client-side navigation between pages",
        "To define the website's navigation structure"
      ],
      correctAnswer: 2
    },
    {
      id: 9,
      question: "Which file is used to customize the HTML document in Next.js?",
      options: [
        "pages/_document.js",
        "pages/index.js",
        "pages/_app.js",
        "public/index.html"
      ],
      correctAnswer: 0
    },
    {
      id: 10,
      question: "What is the purpose of the 'getInitialProps' function in Next.js?",
      options: [
        "To set initial state in React components",
        "To fetch data on the client-side",
        "To define initial props for the entire application",
        "To fetch data on the server-side (deprecated in favor of getServerSideProps)"
      ],
      correctAnswer: 3
    },
    {
      id: 11,
      question: "How can you add global CSS to a Next.js application?",
      options: [
        "Import it in the _app.js file",
        "Add a link tag to the _document.js file",
        "Import it in every component that needs it",
        "Use inline styles only"
      ],
      correctAnswer: 0
    },
    {
      id: 12,
      question: "What is the purpose of the 'next/head' component?",
      options: [
        "To define the header of the website",
        "To manage state in the application",
        "To modify the <head> section of the HTML document",
        "To create a fixed header for all pages"
      ],
      correctAnswer: 2
    },
    {
      id: 13,
      question: "How do you create an API route in Next.js?",
      options: [
        "Create a file in the 'api' folder",
        "Use the createAPIRoute function",
        "Create a file in the 'pages/api' directory",
        "Define routes in the next.config.js file"
      ],
      correctAnswer: 2
    },
    {
      id: 14,
      question: "What is the purpose of the '.env.local' file in Next.js?",
      options: [
        "To store global variables",
        "To define environment-specific configurations",
        "To store sensitive information and environment variables",
        "To configure the development server"
      ],
      correctAnswer: 2
    },
    {
      id: 15,
      question: "How can you access query parameters in a Next.js page component?",
      options: [
        "Using the useQuery hook",
        "From the props.query object",
        "Using the getQueryParams function",
        "By parsing the URL manually"
      ],
      correctAnswer: 1
    },
    {
      id: 16,
      question: "What is the purpose of the 'next.config.js' file?",
      options: [
        "To define React components",
        "To configure the Next.js build process",
        "To store API keys",
        "To define database schemas"
      ],
      correctAnswer: 1
    },
    {
      id: 17,
      question: "How do you handle 404 errors in Next.js?",
      options: [
        "By creating a 404.js file in the pages directory",
        "By using a try-catch block in every component",
        "By configuring the server to handle 404 errors",
        "Next.js automatically handles 404 errors"
      ],
      correctAnswer: 0
    },
    {
      id: 18,
      question: "What is the purpose of the 'getStaticPaths' function?",
      options: [
        "To generate static files",
        "To define dynamic routes for static generation",
        "To fetch data at build time",
        "To create a sitemap for the website"
      ],
      correctAnswer: 1
    },
    {
      id: 19,
      question: "How can you disable automatic static optimization for a page in Next.js?",
      options: [
        "By using the 'useStatic' hook",
        "By adding 'export const dynamic = true' to the page",
        "By creating a _static.js file",
        "Static optimization cannot be disabled in Next.js"
      ],
      correctAnswer: 1
    },
    {
      id: 20,
      question: "What is the purpose of the 'next/router' module?",
      options: [
        "To create server-side routes",
        "To handle client-side routing and navigation",
        "To define API endpoints",
        "To configure the development server"
      ],
      correctAnswer: 1
    },
    {
      id: 21,
      question: "How do you create a custom error page in Next.js?",
      options: [
        "By creating an error.js file in the pages directory",
        "By using the ErrorBoundary component",
        "By modifying the server configuration",
        "Custom error pages are not supported in Next.js"
      ],
      correctAnswer: 0
    },
    {
      id: 22,
      question: "What is the purpose of the 'next export' command?",
      options: [
        "To export data from the database",
        "To generate a static HTML version of the application",
        "To create a production build",
        "To export the application as a Docker image"
      ],
      correctAnswer: 1
    },
    {
      id: 23,
      question: "How can you add custom fonts to a Next.js project?",
      options: [
        "By using the next/font module",
        "By importing font files in the _app.js file",
        "By adding a <link> tag to the _document.js file",
        "All of the above"
      ],
      correctAnswer: 3
    },
    {
      id: 24,
      question: "What is the purpose of the 'next/image' component?",
      options: [
        "To add decorative images to the website",
        "To optimize and lazy-load images automatically",
        "To create image galleries",
        "To apply filters to images"
      ],
      correctAnswer: 1
    },
    {
      id: 25,
      question: "How do you create a layout component in Next.js?",
      options: [
        "By using the built-in Layout component",
        "By creating a custom component and wrapping it around page content",
        "By modifying the _app.js file",
        "Layouts are not supported in Next.js"
      ],
      correctAnswer: 1
    },
    {
      id: 26,
      question: "What is the purpose of the 'getServerSideProps' function?",
      options: [
        "To fetch data on the client-side",
        "To generate static pages at build time",
        "To fetch data on every request",
        "To define server-side routes"
      ],
      correctAnswer: 2
    },
    {
      id: 27,
      question: "How can you add TypeScript support to a Next.js project?",
      options: [
        "By installing the @types/next package",
        "By renaming files to .ts or .tsx extensions",
        "By adding a tsconfig.json file",
        "All of the above"
      ],
      correctAnswer: 3
    },
    {
      id: 28,
      question: "What is the purpose of the 'next/script' component?",
      options: [
        "To write inline JavaScript",
        "To optimize the loading of third-party scripts",
        "To execute server-side JavaScript",
        "To define build-time scripts"
      ],
      correctAnswer: 1
    },
    {
      id: 29,
      question: "How do you implement API routes with dynamic parameters in Next.js?",
      options: [
        "By using square brackets in the file name",
        "By using the useParams hook",
        "By defining routes in the next.config.js file",
        "API routes cannot have dynamic parameters"
      ],
      correctAnswer: 0
    },
    {
      id: 30,
      question: "What is the purpose of the 'next/link' component?",
      options: [
        "To create external links",
        "To enable client-side navigation between pages",
        "To style anchor tags",
        "To create email links"
      ],
      correctAnswer: 1
    },
    {
      id: 31,
      question: "How can you implement server-side rendering (SSR) in Next.js?",
      options: [
        "By using the getServerSideProps function",
        "By adding 'ssr: true' to the page component",
        "By importing the ServerSideRendering component",
        "SSR is enabled by default for all pages"
      ],
      correctAnswer: 0
    },
    {
      id: 32,
      question: "What is the purpose of the 'next/dynamic' function?",
      options: [
        "To create dynamic routes",
        "To implement code splitting and lazy loading",
        "To generate dynamic CSS",
        "To handle dynamic data fetching"
      ],
      correctAnswer: 1
    },
    {
      id: 33,
      question: "How do you add meta tags to a Next.js page?",
      options: [
        "By using the next/head component",
        "By modifying the _document.js file",
        "By adding a meta.json file to the public directory",
        "Meta tags are automatically generated by Next.js"
      ],
      correctAnswer: 0
    },
    {
      id: 34,
      question: "What is the purpose of the 'next/amp' module?",
      options: [
        "To create animated pages",
        "To implement Accelerated Mobile Pages (AMP)",
        "To amplify the performance of Next.js apps",
        "To add audio capabilities to pages"
      ],
      correctAnswer: 1
    },
    {
      id: 35,
      question: "How can you implement internationalization (i18n) in Next.js?",
      options: [
        "By using the built-in i18n routing support",
        "By manually translating all strings",
        "By using Google Translate API",
        "Internationalization is not supported in Next.js"
      ],
      correctAnswer: 0
    },
    {
      id: 36,
      question: "What is the purpose of the 'next.config.js' rewrites option?",
      options: [
        "To rename files and directories",
        "To redirect users to different pages",
        "To modify the URL structure without changing the destination",
        "To rewrite the application's source code"
      ],
      correctAnswer: 2
    },
    {
      id: 37,
      question: "How do you implement client-side data fetching in Next.js?",
      options: [
        "By using the getClientSideProps function",
        "By using hooks like useState and useEffect",
        "By adding a data.js file to the pages directory",
        "Client-side data fetching is not possible in Next.js"
      ],
      correctAnswer: 1
    },
    {
      id: 38,
      question: "What is the purpose of the 'next/router' useRouter hook?",
      options: [
        "To create custom routing logic",
        "To access the router object and perform navigation",
        "To define server-side routes",
        "To generate a sitemap for the website"
      ],
      correctAnswer: 1
    },
    {
      id: 39,
      question: "How can you optimize images in Next.js?",
      options: [
        "By using the built-in Image component",
        "By manually resizing all images",
        "By using a third-party image optimization library",
        "Images are automatically optimized in Next.js"
      ],
      correctAnswer: 0
    },
    {
      id: 40,
      question: "What is the purpose of the 'next build' command?",
      options: [
        "To start the development server",
        "To create a production-ready build of the application",
        "To build custom plugins for Next.js",
        "To generate static HTML files"
      ],
      correctAnswer: 1
    },
    {
      id: 41,
      question: "How do you implement API middleware in Next.js?",
      options: [
        "By using the built-in Middleware component",
        "By creating a _middleware.js file in the pages/api directory",
        "By adding middleware functions to the API route handler",
        "API middleware is not supported in Next.js"
      ],
      correctAnswer: 2
    },
    {
      id: 42,
      question: "What is the purpose of the 'next start' command?",
      options: [
        "To start the development server",
        "To create a new Next.js project",
        "To start the production server",
        "To initialize the database"
      ],
      correctAnswer: 2
    },
    {
      id: 43,
      question: "What is the purpose of the 'fallback' property in getStaticPaths?",
      options: [
        "To handle 404 errors",
        "To specify a default language",
        "To enable incremental static regeneration",
        "To define a loading state for dynamic pages"
      ],
      correctAnswer: 2
    },
    {
      id: 44,
      question: "How can you implement authentication in Next.js?",
      options: [
        "By using the built-in Auth component",
        "By implementing custom authentication logic or using libraries like NextAuth.js",
        "By adding an auth.js file to the pages directory",
        "Authentication is not possible in Next.js"
      ],
      correctAnswer: 1
    },
    {
      id: 45,
      question: "What is the purpose of the 'next/error' component?",
      options: [
        "To display custom error messages",
        "To log errors to the console",
        "To render the built-in error page",
        "To handle server-side errors"
      ],
      correctAnswer: 2
    },
    {
      id: 46,
      question: "How do you implement CSS modules in Next.js?",
      options: [
        "By using the .module.css file extension",
        "By importing the CSSModule component",
        "By adding 'modules: true' to the next.config.js file",
        "CSS modules are not supported in Next.js"
      ],
      correctAnswer: 0
    },
    {
      id: 47,
      question: "What is the purpose of the 'next/babel' preset?",
      options: [
        "To enable TypeScript support",
        "To configure Babel for Next.js projects",
        "To add custom plugins to the build process",
        "To optimize JavaScript code"
      ],
      correctAnswer: 1
    },
    {
      id: 48,
      question: "How can you implement code splitting in Next.js?",
      options: [
        "By using the next/dynamic function",
        "By adding 'splitting: true' to the next.config.js file",
        "By creating separate bundles manually",
        "Code splitting is automatically handled by Next.js"
      ],
      correctAnswer: 0
    },
    {
      id: 49,
      question: "What is the purpose of the 'basePath' configuration option in next.config.js?",
      options: [
        "To set the root directory of the project",
        "To define the base URL for API routes",
        "To set a path prefix for the application",
        "To specify the location of static assets"
      ],
      correctAnswer: 2
    },
    {
      id: 50,
      question: "How do you implement custom server-side redirects in Next.js?",
      options: [
        "By using the redirects option in next.config.js",
        "By creating a _redirects.js file",
        "By modifying the server configuration",
        "Server-side redirects are not supported in Next.js"
      ],
      correctAnswer: 0
    },
    {
      id: 51,
      question: "What is the purpose of the 'next/jest' preset?",
      options: [
        "To add Jest testing framework to Next.js projects",
        "To create mock API responses",
        "To generate test coverage reports",
        "To run end-to-end tests"
      ],
      correctAnswer: 0
    },
    {
      id: 52,
      question: "How can you implement server-side caching in Next.js?",
      options: [
        "By using the built-in caching mechanism",
        "By implementing custom cache headers",
        "Caching is automatic in Next.js",
        "Server-side caching is not possible in Next.js"
      ],
      correctAnswer: 1
    },
    {
      id: 53,
      question: "What is the purpose of the 'next/constants' module?",
      options: [
        "To define global constants for the application",
        "To access Next.js version information",
        "To set environment variables",
        "To define build-time constants"
      ],
      correctAnswer: 1
    },
    {
      id: 54,
      question: "How do you implement custom webpack configurations in Next.js?",
      options: [
        "By modifying the webpack option in next.config.js",
        "By creating a webpack.config.js file",
        "By using the @next/webpack package",
        "Custom webpack configurations are not supported in Next.js"
      ],
      correctAnswer: 0
    },
    {
      id: 55,
      question: "What is the purpose of the 'next/mdx' package?",
      options: [
        "To add Markdown support to Next.js",
        "To create documentation for Next.js projects",
        "To generate blog posts automatically",
        "To optimize images in Markdown files"
      ],
      correctAnswer: 0
    },
    {
      id: 56,
      question: "How can you implement API rate limiting in Next.js?",
      options: [
        "By using the built-in rateLimit function",
        "By implementing custom middleware",
        "Rate limiting is not possible in Next.js",
        "By using a third-party service only"
      ],
      correctAnswer: 1
    },
    {
      id: 57,
      question: "What is the purpose of the 'next/env' module?",
      options: [
        "To set environment variables",
        "To access environment variables safely",
        "To encrypt sensitive data",
        "To manage different environments (development, production, etc.)"
      ],
      correctAnswer: 1
    },
    {
      id: 58,
      question: "How do you implement custom 500 error pages in Next.js?",
      options: [
        "By creating a 500.js file in the pages directory",
        "By using the Error component from next/error",
        "By modifying the server configuration",
        "Custom 500 error pages are not supported in Next.js"
      ],
      correctAnswer: 0
    },
    {
      id: 59,
      question: "What is the purpose of the 'next/bundle-analyzer' plugin?",
      options: [
        "To optimize bundle size automatically",
        "To analyze and visualize the size of webpack output files",
        "To remove unused code from the bundle",
        "To compress JavaScript files"
      ],
      correctAnswer: 1
    },
    {
      id: 60,
      question: "How can you implement WebSocket connections in Next.js?",
      options: [
        "By using the built-in WebSocket component",
        "By implementing custom WebSocket logic or using libraries like Socket.io",
        "WebSocket connections are not supported in Next.js",
        "By adding a websocket.js file to the pages/api directory"
      ],
      correctAnswer: 1
    },
    {
      id: 61,
      question: "What is the purpose of the 'next export' command?",
      options: [
        "To export data from the database",
        "To generate a static HTML version of the application",
        "To create a production build",
        "To export the application as a Docker image"
      ],
      correctAnswer: 1
    },
    {
      id: 62,
      question: "How do you implement dynamic imports in Next.js?",
      options: [
        "By using the import() function",
        "By adding 'dynamic: true' to the component",
        "By using the Dynamic component from next/dynamic",
        "Dynamic imports are not supported in Next.js"
      ],
      correctAnswer: 0
    },
    {
      id: 63,
      question: "What is the purpose of the 'next/amp' validator?",
      options: [
        "To validate AMP pages",
        "To optimize images for AMP",
        "To generate AMP-compatible CSS",
        "To create AMP stories"
      ],
      correctAnswer: 0
    },
    {
      id: 64,
      question: "How can you implement progressive web app (PWA) features in Next.js?",
      options: [
        "By using the built-in PWA component",
        "By adding a manifest.json file and implementing a service worker",
        "PWA features are automatically enabled in Next.js",
        "By installing the @next/pwa package"
      ],
      correctAnswer: 1
    },
    {
      id: 65,
      question: "What is the purpose of the 'next/trace' API?",
      options: [
        "To implement distributed tracing",
        "To debug performance issues",
        "To track user behavior",
        "To log errors in production"
      ],
      correctAnswer: 1
    },
    {
      id: 66,
      question: "How do you implement custom Babel configurations in Next.js?",
      options: [
        "By creating a .babelrc file",
        "By modifying the babel option in next.config.js",
        "By using the @next/babel package",
        "Custom Babel configurations are not supported in Next.js"
      ],
      correctAnswer: 0
    },
    {
      id: 67,
      question: "What is the purpose of the 'next/profiler' component?",
      options: [
        "To measure component render performance",
        "To create user profiles",
        "To optimize database queries",
        "To generate performance reports"
      ],
      correctAnswer: 0
    },
    {
      id: 68,
      question: "How can you implement server-side events (SSE) in Next.js?",
      options: [
        "By using the built-in SSE component",
        "By implementing custom SSE logic in API routes",
        "SSE is not supported in Next.js",
        "By adding an sse.js file to the pages directory"
      ],
      correctAnswer: 1
    },
    {
      id: 69,
      question: "What is the purpose of the 'next/plugin' API?",
      options: [
        "To create custom Next.js plugins",
        "To manage third-party plugins",
        "To extend webpack configurations",
        "To add new CLI commands"
      ],
      correctAnswer: 0
    },
    {
      id: 70,
      question: "How do you implement custom PostCSS configurations in Next.js?",
      options: [
        "By creating a postcss.config.js file",
        "By modifying the css option in next.config.js",
        "By using the @next/postcss package",
        "Custom PostCSS configurations are not supported in Next.js"
      ],
      correctAnswer: 0
    },
    {
      id: 71,
      question: "What is the purpose of the 'next/stdlib' module?",
      options: [
        "To provide additional utility functions",
        "To implement standard library features",
        "To optimize JavaScript code",
        "There is no 'next/stdlib' module in Next.js"
      ],
      correctAnswer: 3
    },
    {
      id: 72,
      question: "How can you implement GraphQL in Next.js?",
      options: [
        "By using the built-in GraphQL component",
        "By implementing a GraphQL server in API routes or using libraries like Apollo Client",
        "GraphQL is not supported in Next.js",
        "By adding a graphql.js file to the pages directory"
      ],
      correctAnswer: 1
    },
    {
      id: 73,
      question: "What is the purpose of the 'next/telemetry' module?",
      options: [
        "To collect usage data for Next.js",
        "To implement analytics in Next.js applications",
        "To monitor server performance",
        "To track user behavior"
      ],
      correctAnswer: 0
    },
    {
      id: 74,
      question: "How do you implement custom ESLint configurations in Next.js?",
      options: [
        "By creating an .eslintrc file",
        "By modifying the eslint option in next.config.js",
        "By using the @next/eslint package",
        "Custom ESLint configurations are not supported in Next.js"
      ],
      correctAnswer: 0
    },
    {
      id: 75,
      question: "What is the purpose of the 'next/amp' component?",
      options: [
        "To create AMP-only pages",
        "To add AMP features to regular pages",
        "To validate AMP content",
        "To convert regular pages to AMP pages"
      ],
      correctAnswer: 0
    },
    {
      id: 76,
      question: "How can you implement server-side streaming in Next.js?",
      options: [
        "By using the built-in Streaming component",
        "By implementing custom streaming logic in API routes",
        "Streaming is not supported in Next.js",
        "By adding a stream.js file to the pages directory"
      ],
      correctAnswer: 1
    },
    {
      id: 77,
      question: "What is the purpose of the 'next/future' namespace?",
      options: [
        "To access experimental features",
        "To implement time travel debugging",
        "To generate future-proof code",
        "There is no 'next/future' namespace in Next.js"
      ],
      correctAnswer: 0
    },
    {
      id: 78,
      question: "How do you implement custom Sass configurations in Next.js?",
      options: [
        "By creating a sass.config.js file",
        "By modifying the sass option in next.config.js",
        "By using the @next/sass package",
        "Custom Sass configurations are not supported in Next.js"
      ],
      correctAnswer: 1
    },
    {
      id: 79,
      question: "What is the purpose of the 'next/server' module?",
      options: [
        "To create custom server implementations",
        "To access server-side utilities",
        "To implement server-side rendering",
        "To configure the development server"
      ],
      correctAnswer: 1
    },
    {
      id: 80,
      question: "How can you implement WebAssembly (Wasm) in Next.js?",
      options: [
        "By using the built-in Wasm component",
        "By importing and using Wasm modules directly",
        "WebAssembly is not supported in Next.js",
        "By adding a wasm.js file to the pages directory"
      ],
      correctAnswer: 1
    },
    {
      id: 81,
      question: "What is the purpose of the 'next/data-client' module?",
      options: [
        "To implement client-side data fetching",
        "To manage global state",
        "To optimize data transfer between client and server",
        "There is no 'next/data-client' module in Next.js"
      ],
      correctAnswer: 3
    },
    {
      id: 82,
      question: "How do you implement custom TypeScript configurations in Next.js?",
      options: [
        "By creating a tsconfig.json file",
        "By modifying the typescript option in next.config.js",
        "By using the @next/typescript package",
        "Custom TypeScript configurations are not supported in Next.js"
      ],
      correctAnswer: 0
    },
    {
      id: 83,
      question: "What is the purpose of the 'next/static' directory?",
      options: [
        "To store static assets",
        "To generate static HTML files",
        "To implement static site generation",
        "There is no 'next/static' directory in Next.js"
      ],
      correctAnswer: 3
    },
    {
      id: 84,
      question: "How can you implement server-side pagination in Next.js?",
      options: [
        "By using the built-in Pagination component",
        "By implementing custom pagination logic in getServerSideProps or API routes",
        "Pagination is automatically handled by Next.js",
        "By adding a pagination.js file to the pages directory"
      ],
      correctAnswer: 1
    },
    {
      id: 85,
      question: "What is the purpose of the 'next/font' module?",
      options: [
        "To add custom fonts to the application",
        "To optimize font loading and performance",
        "To generate font files",
        "To apply font styles dynamically"
      ],
      correctAnswer: 1
    },
    {
      id: 86,
      question: "How do you implement custom Redux configurations in Next.js?",
      options: [
        "By creating a redux.config.js file",
        "By using the with-redux higher-order component",
        "By modifying the redux option in next.config.js",
        "Custom Redux configurations are not supported in Next.js"
      ],
      correctAnswer: 1
    },
    {
      id: 87,
      question: "What is the purpose of the 'next/legacy' namespace?",
      options: [
        "To access deprecated features",
        "To implement backward compatibility",
        "To optimize legacy code",
        "There is no 'next/legacy' namespace in Next.js"
      ],
      correctAnswer: 0
    },
    {
      id: 88,
      question: "How can you implement server-side logging in Next.js?",
      options: [
        "By using the built-in Logger component",
        "By implementing custom logging logic in API routes or server-side methods",
        "Logging is automatically handled by Next.js",
        "By adding a log.js file to the pages directory"
      ],
      correctAnswer: 1
    },
    {
      id: 89,
      question: "What is the purpose of the 'next/dist' directory?",
      options: [
        "To store distribution files",
        "To implement code splitting",
        "To optimize asset delivery",
        "There is no 'next/dist' directory in Next.js"
      ],
      correctAnswer: 3
    },
    {
      id: 90,
      question: "How do you implement custom Prettier configurations in Next.js?",
      options: [
        "By creating a .prettierrc file",
        "By modifying the prettier option in next.config.js",
        "By using the @next/prettier package",
        "Custom Prettier configurations are not supported in Next.js"
      ],
      correctAnswer: 0
    },
    {
      id: 91,
      question: "What is the purpose of the 'next/testing' module?",
      options: [
        "To provide testing utilities for Next.js applications",
        "To implement A/B testing",
        "To generate test reports",
        "There is no 'next/testing' module in Next.js"
      ],
      correctAnswer: 3
    },
    {
      id: 92,
      question: "How can you implement server-side compression in Next.js?",
      options: [
        "By using the built-in Compression component",
        "By implementing custom compression middleware",
        "Compression is automatically handled by Next.js",
        "By adding a compress.js file to the pages directory"
      ],
      correctAnswer: 1
    },
    {
      id: 93,
      question: "What is the purpose of the 'next/types' module?",
      options: [
        "To provide TypeScript type definitions for Next.js",
        "To implement runtime type checking",
        "To generate TypeScript interfaces from API responses",
        "There is no 'next/types' module in Next.js"
      ],
      correctAnswer: 0
    },
    {
      id: 94,
      question: "How do you implement custom Stylelint configurations in Next.js?",
      options: [
        "By creating a .stylelintrc file",
        "By modifying the stylelint option in next.config.js",
        "By using the @next/stylelint package",
        "Custom Stylelint configurations are not supported in Next.js"
      ],
      correctAnswer: 0
    },
    {
      id: 95,
      question: "What is the purpose of the 'next/polyfill' module?",
      options: [
        "To add polyfills for older browsers",
        "To optimize JavaScript code for modern browsers",
        "To implement feature detection",
        "There is no 'next/polyfill' module in Next.js"
      ],
      correctAnswer: 3
    },
    {
      id: 96,
      question: "How can you implement server-side email sending in Next.js?",
      options: [
        "By using the built-in Email component",
        "By implementing custom email logic in API routes",
        "Email sending is automatically handled by Next.js",
        "By adding an email.js file to the pages directory"
      ],
      correctAnswer: 1
    },
    {
      id: 97,
      question: "What is the purpose of the 'next/runtime' module?",
      options: [
        "To provide runtime configuration options",
        "To optimize code execution at runtime",
        "To implement just-in-time compilation",
        "There is no 'next/runtime' module in Next.js"
      ],
      correctAnswer: 3
    },
    {
      id: 98,
      question: "How do you implement custom Rollup configurations in Next.js?",
      options: [
        "By creating a rollup.config.js file",
        "By modifying the rollup option in next.config.js",
        "By using the @next/rollup package",
        "Custom Rollup configurations are not supported in Next.js"
      ],
      correctAnswer: 3
    },
    {
      id: 99,
      question: "What is the purpose of the 'next/prefetch' component?",
      options: [
        "To implement data prefetching",
        "To preload JavaScript bundles",
        "To optimize image loading",
        "There is no 'next/prefetch' component in Next.js"
      ],
      correctAnswer: 3
    },
    {
      id: 100,
      question: "How can you implement server-side PDF generation in Next.js?",
      options: [
        "By using the built-in PDF component",
        "By implementing custom PDF generation logic in API routes",
        "PDF generation is automatically handled by Next.js",
        "By adding a pdf.js file to the pages directory"
      ],
      correctAnswer: 1
    }
  ]
  