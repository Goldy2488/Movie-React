<!-- Notes : React -->
<!-- Q1 why react -->
1. Why Choose React?
High Demand for Jobs:

- React is widely adopted in the industry, making it a highly sought-after skill for developers.
Backed by Facebook:

- Developed and maintained by Facebook, ensuring continuous updates and a strong developer community.
React includes 48 components to facilitate building applications.
Component-Based Architecture:

- Enables the creation of reusable components, allowing developers to build parts of the UI once and reuse them throughout the application.
Promotes modular and maintainable code, making development more efficient.
Virtual DOM:

- React uses a Virtual DOM for fast and efficient updates to the UI.
Helps in quick re-rendering and updating of components, enhancing performance.
Clear Syntax:

- React has a simple and understandable syntax, making it beginner-friendly and easier to learn.
Allows developers to write clean and maintainable code.
React Native:

- Extends React's capabilities to mobile app development.
Enables building native mobile apps using the same principles as web development in React.
Server-Side Rendering:

- Improves page load speed and enhances SEO by rendering components on the server before they are sent to the client.
Flexible and Scalable:

- Suitable for projects of all sizes, from small-scale applications to large enterprise-level projects.
Offers flexibility in development, allowing it to adapt to various project requirements.

<!-- Q2. what is react ? -->


<!-- Q3. installation steps:-  -->
1. install node.js & npm( node package manager)
2. Create a folder - My React App 
3. Navigate to folder {My React App} & open terminal 
4. Run Command : "npm create vite@latest"
5. Type . & enter 
6. choose a framework :- "React"
7. select a varient : "javascript + SWC"
8. npm install or npm i 


<!-- Q4 about file  -->

1. vite.config.js :  

    Purpose: Configuration file for Vite, a build tool that     provides fast development and optimized production builds.

    Common Configurations:
        1. Define project root, build output, plugins.
        2. Customize server options like port, proxy settings.
        3. Set up environment variables.

2. gitignore    
    Purpose: Specifies which files and directories Git should ignore.

    Common Entries:
        1. node_modules/: Excludes dependency files.
        2. dist/ or build/: Excludes build output directories.
        3. .env: Excludes environment variables for security.

3. eslint.comfig.js
    Purpose: Configuration for ESLint, a tool that identifies and reports on patterns in JavaScript.

    Common Configurations:
        1. Define rules for code quality and style.
        2. Set environment settings (e.g., browser, node).
        3. Specify parser options and plugins

4. index.html

    Purpose: Entry point for the application; serves as the base HTML file.
    
    Common Elements:
        1.Links to CSS and JavaScript files.
        2.Root <div> where the React app is mounted.
        3.Meta tags for SEO and responsive design.

5. src and there files 
    
    Purpose: Contains the source code of the application.

    Common Files:
        1. App.js or App.jsx: Main component of the React app.
        2. index.js or index.jsx: Entry point for React, renders the app to the DOM.
        3. components/: Directory for reusable UI components.
        4. assets/: Directory for images, fonts, etc.
        5. styles/: Directory for CSS or SCSS files.


6. package.json 

    Purpose: Manages project dependencies and scripts.

    Common Contents:

       1.  dependencies: Lists libraries and packages required for production.
       2. devDependencies: Lists tools needed for development (e.g., testing, linting).
        scripts: Defines npm commands (e.g., start, build, test).
       3. name, version, description: Metadata about the project.

7. package-lock.json

    Purpose: Locks the versions of dependencies for consistent installs.

    Common Features:
   1.  Ensures that the same versions of packages are installed. 
   2.  across different environments.
   3.  Records the exact version and resolved URL of every package installed.


<!--Q5. JSX (JavaScript XML) Overview -->
<!-- What is JSX? -->
    1. Definition: JSX is a syntax extension for JavaScript that looks similar to HTML. It is used in React to describe the UI structure.

    2. Purpose: Allows writing HTML elements in JavaScript, making the code more readable and easier to manage.

    <!-- Key Features of JSX -->

        1. HTML-like Syntax: Write HTML tags directly within JavaScript. Example: <h1>Hello, World!</h1>.
        2. Embedded JavaScript: You can embed JavaScript expressions within JSX using curly braces {}. Example: <h1>{title}</h1>.
        3. Component Integration: JSX is used to render React components. Example: <MyComponent />.
        4. Attributes: Similar to HTML, you can pass attributes to elements or components. Example: <img src="image.png" alt="Image" />.
        5. Conditional Rendering: You can use JavaScript logic inside JSX to conditionally render elements. Example: {isLoggedIn ? <LogoutButton /> : <LoginButton />}.

    <!-- How JSX Works -->

        1. Compiles to JavaScript: Under the hood, JSX is transformed into regular JavaScript function calls by tools like Babel. For example, <h1>Hello</h1> compiles to React.createElement('h1', null, 'Hello').
        2. Virtual DOM: JSX creates elements that represent the structure of the UI in the Virtual DOM, which React uses to efficiently update the actual DOM.
        Advantages of JSX
        3. Readability: Combines the structure of HTML with the power of JavaScript, making the code more intuitive.
        4. Component-Based: Encourages a component-based architecture, where UI pieces are modular and reusable.
        5. Enhanced Development: Supports advanced IDE features like syntax highlighting, autocompletion, and error checking.


<!--Q6. Babel overview -->
<!-- What is Babel? -->
    Definition: Babel is a JavaScript compiler that allows developers to write modern JavaScript (ES6+), which can then be converted into older versions (like ES5) for compatibility with older browsers.

    Purpose: Ensures that your code runs smoothly across different environments, regardless of their support for the latest JavaScript features.

    <!-- Key Features of Babel -->

    1. Transpilation: Converts modern JavaScript syntax and features (e.g., arrow functions, classes, async/await) into a version supported by older browsers.
    2. Plugins and Presets: Babel uses plugins to transform specific JavaScript features. Presets are a collection of plugins that target specific environments or versions (e.g., @babel/preset-env).
    3. Polyfills: Babel can include polyfills to add support for features not natively available in older environments, like Promises or fetch.
    4. React JSX Support: Babel can also transform JSX (used in React) into standard JavaScript, enabling the use of JSX syntax in React applications.
    
    <!-- How Babel Works -->
    
    1. Parsing: Babel reads your source code and parses it into an abstract syntax tree (AST).
    2. Transforming: The AST is then transformed by applying various plugins or presets, which convert the code to the desired version.
    3. Generating: Finally, Babel generates the transformed code back into a JavaScript file that is compatible with older browsers.
    
    <!-- Advantages of Babel -->
    
    1.Cross-Browser Compatibility: Ensures your code runs on all browsers, even those that don’t support the latest JavaScript features.
    2.Future-Proofing: Allows developers to use upcoming JavaScript features today without worrying about compatibility issues.
    3.Integration with Build Tools: Easily integrates with tools like Webpack, Vite, and others, streamlining the development process.
    4.Customization: Highly customizable with various plugins and presets, allowing developers to tailor the compilation process to their specific needs.


<!--Q7. Componets  -->

Definition: Components are the building blocks of a React application. They are reusable pieces of UI that can be composed together to build complex interfaces.

Types:
    1. Functional Components: Simple JavaScript functions that return JSX.
    2. Class Components: ES6 classes that extend React.Component and include a render() method.

Reusability: Components can be reused throughout the            application, promoting modular and maintainable code.

<!--Q8. props  -->

    Definition: "Props" (short for properties) are inputs to React components that allow data to be passed from parent components to child components.

    Usage: Props are used to pass dynamic data and event handlers to components.

    Read-Only: Props are immutable, meaning they cannot be modified by the component that receives them.

Example : 

1. This is the example of Normal props
    // Functional Component ceeating 
    function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
    }

    // Using the Component
    function App() {
    return (
        <div>
        <Greeting name="Alice" />
        <Greeting name="Bob" />
        </div>
    );
    }

2. By Desturting 

 // Functional Component ceeating 
    function Greeting({name}) {
    return <h1>Hello, {name}!</h1>;
    }

    // Using the Component
    function App() {
    return (
        <div>
        <Greeting name="Alice" />
        <Greeting name="Bob" />
        </div>
    );
    }

    Note:
    1. The props object is destructured directly in the function parameters: { name }.

    2. This allows direct access to the name prop without needing props.name.



Q9. Ternary operator ,&& operator 

1. Ternary Operator (condition ? expr1 : expr2)
    Purpose: Provides a shorthand way to write conditional statements.

const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message); // Output: "Welcome back!"

2. && Operator (Logical AND) condition && expressionIfTrue.
    Purpose: Executes the second expression only if the first expression is true.

    const showGreeting = true;
const greeting = showGreeting && "Hello, World!";
console.log(greeting); // Output: "Hello, World!"



<!-- -------------------- Css  ---------------------->
<!-- ways of css  -->
1. Inline CSS
    Definition: Directly apply styles to React elements using the style attribute.
    Explanation: The style attribute accepts a JavaScript object with camelCased properties.

Example:    
function App() {
  const style = {
    color: 'blue',
    fontSize: '16px'
  };

  return <p style={style}>This is an inline-styled paragraph.</p>;
}

2. Internal CSS
Definition: Define CSS rules within a <style> tag inside the component.
Explanation: Use template literals to include CSS within the component. This approach is less common but can be useful for component-specific styles.

Example:
function App() {
  return (
    <div>
      <style>
        {`
          p {
            color: green;
            font-size: 18px;
          }
        `}
      </style>
      <p>This is an internal-styled paragraph.</p>
    </div>
  );
}

3. External CSS
Definition: Use an external stylesheet by importing it into your React component.
Explanation: Import the CSS file into your component file. This approach keeps styles modular and separate from JavaScript logic
Example:

App.css:
p {
  color: red;
  font-size: 20px;
}

App.js:
import './App.css';

function App() {
  return <p>This is an external-styled paragraph.</p>;
}

4. CSS-in-JS
Definition: Define styles within JavaScript using libraries like styled-components or Emotion.
Explanation: Styles are written within JavaScript files, allowing dynamic styling based on component state or props.

Example (using styled-components):
import styled from 'styled-components';

const StyledParagraph = styled.p`
  color: purple;
  font-size: 22px;
`;

function App() {
  return <StyledParagraph>This is a CSS-in-JS styled paragraph.</StyledParagraph>;
}

5. CSS Modules
Definition: Scope CSS to specific components using CSS Modules.

Explanation: CSS Modules automatically scope class names locally, preventing style conflicts and ensuring styles apply only to the component where they are imported.

Example:

App.module.css:
.container {
  color: orange;
  font-size: 24px;
}


App.js:
import styles from './App.module.css';

function App() {
  return <p className={styles.container}>This is a CSS Modules styled paragraph.</p>;
}


<!-- ---------------------------------events in css ------------------------- -->
CSS itself does not handle events directly. However, CSS can respond to certain user interactions and states through pseudo-classes and pseudo-elements

<!-- 1. Pseudo-Classes -->
Pseudo-classes allow you to apply styles based on the state or position of an element. Some of these pseudo-classes respond to user interactions:

1. :hover: Applies styles when the user hovers over an element with a pointer device.


 button:hover {
  background-color: lightblue;
}

2. :focus: Applies styles when an element (like an input field) is focused (clicked on or navigated to).

input:focus {
  border-color: blue;
}

3. :active: Applies styles when an element is being activated (e.g., when a button is clicked).

button:active {
  background-color: darkblue;
  color: white;
}

4. :visited: Applies styles to visited links (in conjunction with :link for unvisited links).

a:visited {
  color: purple;
}

5. :checked: Applies styles to input elements (like checkboxes or radio buttons) that are checked.


input:checked + label {
  font-weight: bold;
}

6. :disabled: Applies styles to disabled form elements.

button:disabled {
  background-color: gray;
  cursor: not-allowed;
}
<!-- 2. Pseudo-Elements -->
Pseudo-elements are used to style specific parts of an element. They don’t handle events directly but can respond to states indirectly:

1. ::before: Inserts content before an element's content.

.notification::before {
  content: "🔔";
  margin-right: 8px;
}

2. ::after: Inserts content after an element's content.

.tooltip::after {
  content: "This is a tooltip!";
  display: block;
  background-color: black;
  color: white;
  padding: 4px;
  border-radius: 4px;
}

<!-- 3. CSS Variables and Custom Properties -->
CSS variables can be updated dynamically with JavaScript, enabling complex interactions:

Example (JavaScript interaction with CSS variables):

styles.css:
.box {
  --box-color: blue;
  background-color: var(--box-color);
  width: 100px;
  height: 100px;
}
script.js:

const box = document.querySelector('.box');

box.addEventListener('click', () => {
  document.documentElement.style.setProperty('--box-color', 'red');
});
Explanation: The background color of the .box element changes when it is clicked, thanks to JavaScript modifying the CSS variable --box-color.



<!-- use state -->