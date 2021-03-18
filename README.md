`#react.js-intro` `#assembler-school` `#master-in-software-engineering`

# Assembler School: React.js Intro Workshop <!-- omit in toc -->

In this workshop you will learn how to render components in ah HTML file.

## Table of Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
- [Contents and Branches Naming Strategy](#contents-and-branches-naming-strategy)
- [React Basics Part I](#react-basics-part-i)
- [What is React?](#what-is-react)
- [Why use react?](#why-use-react)
- [How to render a component](#how-to-render-a-component)
- [Passing props to a component](#passing-props-to-a-component)
- [Workshop](#workshop)

## Getting Started

### The repo

First, you will need to clone the repo:

```bash
$ git clone https://github.com/assembler-school/reactjs-intro-workshop-project-1
```

## Contents and Branches Naming Strategy

The repository is made up of several branches that include the contents and exercises of each section.

The branches follow a naming strategy like the following:

- `{NN}-exercise`: includes the main contents and the instructions of the exercises
- `{NN}-exercise-solution`: includes the solution of the exercises

### Fetching All the Branches

In order to fetch all the remote branches in the repository you can use the following command:

```bash
$ git fetch --all

# List both remote-tracking branches and local branches
$ git branch --all
```

Then, you can create a local branch based on a remote branch with the following command:

```bash
$ git checkout -b <new_branch_name> <remote_branch_name>
```

## React Basics Part I

## What is React?

React is a JavaScript library for building user interfaces. It is an open-source, component-based, front-end library responsible only for the application’s view layer.

React is the most popular front-end JavaScript library in the field of web development. It was created by Jordan Walke, a software engineer at Facebook.


## Why use react?

Now that we know what React is, let’s move on and see why React is the most popular front-end library for web application development.

#### ✅ Improved Performance

React uses a Virtual DOM and compares the components’ previous states and updates only the items in the Real DOM that were changed, instead of updating all of the components again, as conventional web applications do.

#### ✅ Reusable Components

Components can be reused throughout the application, which in turn dramatically reduces the application’s development time.

#### ✅ Unidirectional Data Flow

When designing a React app, developers often nest child components within parent components and it becomes easier to debug errors and know where a problem occurs in an application at the moment in question.

#### ✅ Small Learning Curve

It can be used for the development of both web and mobile apps: There is a framework called React Native, derived from React itself, that is used for creating beautiful mobile applications.

#### ✅ Dedicated Tools for Easy Debugging

React also has a Chrome extension that can be used to debug React applications.

## How to render a component

### Define a component once
First, we should define the component itself and the HTML that it will produce. Then, we should tell React to "render" (embed, insert, ect.) the result HTML of that component into the general content.

The component will a class with a render method that uses the `createElement` method from React to produce its result HTML
```js
const e = React.createElement;

class Greeting extends React.Component {
  render() {
    return e(
      'h1',
      { },
      'Hello World'
    );
  }
}
```
Then, we shoudl tell React where to render that component into:
```js
ReactDOM.render(
  e(Greeting),
  document.getElementById('greeting_container')
);
```

Then, React will insert the title wherever it finds an element with id `greeting_container` such as
```html
<div id="greeting_container"></div>
```

## Passing props to a component
We can also pass attributes to our components in order to reuse it with different content. For example, we could pass to our title a complementary text
```html
<div id="greeting_container" data-text="everyone"></div>
```

Then, we can use that attributes (props in React) on our component. Note that in this case we should also implement the constructor method
```js
const e = React.createElement;

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return e(
      'h1',
      { },
      'Hello World '+this.props.text
    );
  }
}

const element =  document.getElementById('greeting_container');
const textProps = element.dataset.text;

ReactDOM.render(
  e(Greeting, { text: textProps }),
  element
);
```


## Workshop
For this Workshop you should create an HTML and a Card component to show 3 product cards. The result should be something like this:

![Cards](./cards.png)

### Bonus points
It would be great to also reuse the card button right? Try to render the button also as a react component inside the card

## Author <!-- omit in toc -->

[Cristiam Da Silva](https://github.com/cristiam86)

## License <!-- omit in toc -->

[MIT](https://choosealicense.com/licenses/mit/)