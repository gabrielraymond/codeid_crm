This is the boilerplate of code.id

**Setup**

- Install `node`
- Install `yarn` package
- Run `yarn install`
- Run the web using the script

**Node & NVM**

- Get NVM / Node Version Manager for development using brew `brew install nvm` or install the FNM `https://github.com/Schniz/fnm`


**Script**
- `yarn dev` to run on `development` mode

**Name Convention**

- `ComponentName` using PascalCase
- `variableName` using camelCase
- `CONSTANT_NAME` using SNAKE_CASE with UPPERCASE
- DOM `id_name` using snake_case with lowercase
- DOM `class-name` using kebab-case with lowercase
- `folder_name` using snake_case with lowercase
- `ComponentFileName.jsx/tsx` using PascalCase
- Component file name should using `.jsx/tsx` extension, and `.js/ts` for non-component js/ts files
- Singular and plural naming
- Boolean variable should has `is` prefix for `isBooleanVariableName`

**Element Guideline**

- `Element` acts as primitive component
- `Element` only serves one DOM
- `Element` only shows one and do it right
- `Element` does not have logic
- `Element` is dumbest component
- Every `Element`s should has propTypes

**Code Guideline**

- use `const` and `let`, avoid using `var` as variable declaration

**Environment**

- `local` for engineer local machine
- `development` for development server


**Tools**

- Using `vscode` as IDE is recommended
- Using `eslint` for linting
- Using `prettier` for auto-formatting codes

**Framework/Library**
- Nextjs
- React Query (fetch, cache & state management )
- React hook form (bundle size more smaller, support yup)
- Dayjs for date library (smaller size)

**UI**

- https://ant.design


**Folder Structures**
- src
        - features
            - [name-of-features]
                - models (models folder for transforming data from api)
                - types
                - ui
                    - components
                - hooks
        - pages (routing here)
        - shared
            - api
                - fetch
                - mutation
            - components
            - constants
            - helpers
            - libs
            - styles
            - theme


**How To Use**
remove file/folder in examples routes or adjust it based on projects requirement

**Command Line Generate Create new Component/Pages/API/**
- npm/pnpm run generate component
- npm/pnpm run generate page
- npm/pnpm run generate api

**Translation**
- https://www.npmjs.com/package/next-translate
- https://nextjs.org/docs/advanced-features/i18n-routing
to use translation it using the subrouting features from nextjs ex : localhost:3000/en for english and the default without subrouting and using translation using next-translate
- Every Link nextjs or routing should include locale prop with lang variable from next-translate
- localhost:3000/ -> default language id
- localhost:3000/en -> language en

