# ts-course-2022

## Getting start

- **NPM**
    - Using install with  `npm`  using  `npm i typescript -g`
    
- NodeJS Project (v18+)
    1.  `npm init`
    2. `npm install typescript —D` (+4.7)
    3.  `npm i -D @types/node`
    4. at **tsconfig.json**
        
        ```json
        {
            "compilerOptions": {
              "module": "NodeNext",
              "moduleResolution": "NodeNext",
              "target": "ES2020",
              "sourceMap": true,
              "outDir": "dist",
            },
            "include": ["src/**/*"],
          }
        ```
        
    5. using `yarn add ts-node-dev --dev`
    6. update ***script*** in package.json   
        
        ```json
        {
        	...
        	"scripts": {
            "build": "tsc",
            "dev": "ts-node-dev --respawn --transpile-only src/index.ts"
          },
        	....
        }
        ```
