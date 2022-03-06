# Code Sandbox System Design

---

created: 06-Mar-2022
tags: #frontend-system-design #frontend #system-design

---

## Index

[[#Requirements]]
[[#Scoping]]
[[#Core functionalities]]
[[#Tech Stacks]]
[[#Implementation]]

## Content

### Requirements

#### Functional

- Dashboard to show recent sandboxes.
- Language Support
- Code Editor
- Pre defined templates to kick start quickly
- Realtime Preview
- Debugging the code in the sandbox
  - Console capabilities
  - Dev Tools
  - Running Tests
- Git repo linking capabilities(Github, Gitlab, bitbucket)
- Login Access
- Pair Programming
- File Explorer
- Complete code visibility
- Add/Remove Packages
- Code deployment with Netlify, Vercel, etc
- build and eject - offline deployment

#### Non-Functional

- Fast realtime updates
- low latency
- High on performance
- Ability to support latest tech
- Live Preview
- Authorization
- UI enhancements - Theming / Drag and Drop
- Multi Device Support
- Security
  - restrict user cookie from the sandbox

### Scoping

- Code Editor
- Pre defined templates to kick start quickly
- Realtime Preview
- File Explorer
- Debugging the code in the sandbox
  - Console capabilities
  - Dev Tools
  - Running Tests
- Fast realtime updates
- low latency
- High on performance
- UI enhancements - Theming / Drag and Drop
- Code deployment with Netlify, Vercel, etc

### Core functionalities

- VS Code(Code Editor)
  - Auto code completion
  - extension support
  - code suggestions & highlighting
  - Terminal
  - Keyboard Shortcuts
- File Explorer
  - Support for multiple file types
  - File/Folder creation, updation & deletion
  - File/Folder drag & drop
  - keyboard shortcuts
- Deployment
  - Update the server of any client changes
  - build system
  - deployment system
  - auto refresh preview

### Tech Stacks

- Code Editor
  - Use an existing library like Monaco Editor/Code Mirror
- React
- Realtime functionality
  - Browser APIs
  - workers per language
  - iframe: to run the code
  - Service Workers: for caching the assets
  - Web Workers: for transpiling modules, and build the code
  - Indexed Db for storing files
- Debugging
  - React-DevTools-Inline package to have the devtools capabilities.

### Implementation

#### Building the code and how to do live preview

![[Code Sandbox System Design_2022-03-06 20.20.33.excalidraw]]

#### File Manager

From DS point of view it is a tree.

Functionality

- Undo/Redo
- Highlighters
  - extensions for this

APIs:

- get call to load the file/folder(GET)
- delete to the files/folder(DELETE)
- update to the file/folder(UPDATE)
- create to file/folder(POST)
- bulk CRUD?
  - challenges?

#### Deployment

Functionality:

- Eject
  - Just like expo
- Deploy:

  - Figure out through the platform integration on how do they want the files to be passed.

-
