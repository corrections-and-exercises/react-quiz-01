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

### Header

- Create a component called Header
- call this component in <App/>
- It should accept following props: username="karl"
- with this input it should render: "Hello Karl"
- when no props are passed it should render "Hello Guest" instead
- You can create your own markup for this Header

### Topics

- create a component called <Topics/>
- call this component in <App/>
- import the topics-array from "services/data.js" and pass it to the <Topics/> component. It should look something like this: topics={topics}
- the component should display each topic as list item in a list
- when no topics are passed in the component should display the text "no topics available"

### Counter

- create a component called <Counter />
- the component should display the current count
- it should have a button to increase the count by one
- it should have a button to decrease the count by one
- the user should not be able to go below 0
- additionally it should display the count times 2

### Notes, NotesInput, SingleNote

- create these three components -<Notes/> should render <NotesInput> and an instance of <SingleNote/> for each note
- if there are not notes to display the text "no notes" should appear on the page

- NotesInput should contain a form to create a new note
- each note should be an object with the following properties: text, date, id

- SingleNote should accept one note
- it also should have a button to delete a note
