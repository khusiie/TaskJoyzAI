Project Overview Live link 

This project is a refactored version of the given Clumsy Kanban Board.
It fixes existing bugs, introduces a Task Priority feature, and organizes the code into separate modules for clarity and maintainability.

## Code Structure

The code is split into three modules for separation of concerns:

storage.js → Manages task data (create, delete, update, load, save).

render.js → Handles rendering tasks to the DOM and applying priority-based sorting.

dragdrop.js → Manages drag-and-drop interactions between columns.

This modular approach keeps logic focused, easier to debug, and reusable.

## DOM Updates

Instead of re-rendering the entire page, only the task lists (.dropzone columns) are cleared and updated.
This ensures minimal DOM changes:

Efficient performance

Smooth drag-and-drop

Correct ordering without full refresh


## Fixed Bugs

Duplicate Task IDs → Replaced Date.now() with crypto.randomUUID() for guaranteed unique IDs.

Wrong Task Deletion → With unique IDs, tasks are correctly identified and deleted.



## New Feature: Task Priority

Each task now has a priority: High / Medium / Low.

Tasks in each column are automatically sorted by priority:

High → top

Medium → middle

Low → bottom


## How to Run

Clone/download this repo.

Open index.html in a browser (or use VS Code Live Server).

Add, drag, delete tasks and test priority sorting
