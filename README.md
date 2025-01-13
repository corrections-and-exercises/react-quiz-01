# React Quiz 01

## Start

1.**Clone the Repository.**

`git clone git@github.com:corrections-and-exercises/react-quiz-01.git`

2.**Install Dependencies**

`npm install`

3.**Tailwind CSS**

Tailwind CSS is already installed, enabling you to style your components inf desired. Styling is optional for this exercise.

## Testing

The exercises uses "React Testing Library and "Vitest" for tests
To run tests, execute:
` npm test`

You can run tests for specific components using:
`npm test <ComponentName>`

You can stop the tests by pressing `q` in the terminal.

## Instructions

### Components to be created

1. Header
2. Counter
3. Topics
4. Notes
5. NotesInput
6. SingleNote

Each component's behavior will be tested through provided test files. The tests focus on behaviar rather than implementation details. Each test can provide hints and insights into the expected component behavior.

### Header

---

**Props**
Accepts `user`which can be either a string or an object `{firstName: "Karl"}`

**Rendering**
If `user` is a string, render "Hello Karl".
If `user` is an object, render "Hello Karl".
If no props are passed, render "Hello Guest".

### Topics

---

**Props**
Accepts an array of strings as "topics"

**Rendering**
Display each topic inside a list.
If no topics are passed, render: "No topics available".

### Counter

---

Display the current count in the format: "Count: 0".\*
Provide buttons to increase and decrease the count by one.
Prevent the count from going below 0.
Disable the decrease button when the count is 0.

### Notes, NotesInput, SingleNote

---

1.**Notes Component**

Acts as a parent component to `<NotesInput />` and multiple instances of `<SingleNote />`
Manages a collection of notes, each represented as an object with properties such as "id" and "text".
Should display "No notes" when there are no notes to show.

2.**SingleNote**

**Props**
Accepts a note object `{id: 1, text: "cleaning"}`

**Rendering**
Displays the note text and includes a delete button to remove it
Returns an empty string, undefined or null if no note is provided

3.**NotesInput**

Inclues a form with a text input.
Allows users to input text and submit to create a new note
