# React Quiz 01

## Setup

- clone repo
- npm install

- tailwind
- sorting tailwind class with prettier plugin - see .prettierrc

- test files
- testing with react testing library and vitest

## Instructions

- Create following components
- The tests check the behaviour of the components. We don't test for implementation details
- We already have provided you with the necessary files to create your components.
- You need to run "npm run test <nameofcomponent>" to see if you succeed

### Header

- Create a component called Header
- It should accept following props: username="karl"
- with this input it should render: "Hello Karl"
- when no props are passed it should render "Hello Guest" instead
- You can create your own markup for this Header

### Topics

- create a component called <Topics/>
- this component should accept a prop called "topics". it should be an array of strings: `<Topics topics={["react", "express", "postgres"]} />`
- the component should display each topic as link in a list
- when no topics are passed in the component should display the text "no topics available"

### Counter

- create a component called <Counter />
- the component should display the current count like so: `Count: 0`
- it should have a button to increase the count by one
- it should have a button to decrease the count by one
- the user should not be able to go below 0

### Notes, NotesInput, SingleNote

- Start with the Notes Component. It will be the parent component of NotesInput and multitple instance of SingleNote
- it should keep track of all notes currently displayed in the app

- in NotesInput you should implement a form with one text input
- User should be able to enter a text
- when submitting the form a new note should be created and added to the collection of notes
- each note should be represented by an object and should have at least the following keys: id, text, date

- then implement the SingleNote Component
- it should accept one note as a prop
- it also should have a button to delete a note
- the button must display "delete"

- Notes should display "no notes" when there are no notes to be displayed

- SingleNote should return an empty string, undefined or null when no note is passed in
