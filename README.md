
# 50-DAYS
## [Check out the deployed version here!](https://dog-quiz.netlify.com)
## What this project is about

50-DAYS is a multiplayer game-based learning platform, that can be used by students and developers to enhance their javascript knowledge.  This was developed by Mayron van Leenden (https://www.linkedin.com/in/mvanleenden/) and Ceasar Martin Lee (https://www.linkedin.com/in/ceasar-martin-lee-a0a079b5/) for Codaisseur Academy (https://codaisseur.com/)

For more info why we are doing this checkout: **[Goals for this project](#goals-for-this-project)** 

## Table of contents:

- **[Technologies used](#technologies-used)**
- **[Goals for this project](#goals-for-this-project)**
- **[Requirements briefing](#requirements)**
- **[Features built so far overview with pull requests](#features-built-so-far-overview-with-pull-requests)**
- **[My git workflow](#my-git-workflow)**
- **[My agile workflow and trello board](#my-agile-workflow-and-trello-board)**
- **[create-react-app-docs](#create-react-app)**

## Technologies used

#### 👀👇 Click links to view some samples in this project 👇👀

- **[react](./src/containers/Game.js)**  
- **[redux](./src/reducers/question.js)**  
- **[redux-thunk](./src/actions/api.js)**  
- **[jest](./src/tests/questionReducer.test.js)**  

## Goals for this project:

- To practice for myself
- To make an example for the students to see how they could have tackled the project.
- **[To showcase disciplined git usage](#my-git-workflow)**

## Requirements

Checkout out: **[requirements.md](./requirements.md)**

## Features built so far overview with pull requests

#### 👀👇 Click links to view the pull requests 👇👀

- **[Feat/display random dog image](https://github.com/Reinoptland/dog-quiz/pull/2)**
- **[Feat/next question](https://github.com/Reinoptland/dog-quiz/pull/5)**
- **[Feat/feedback on incorrect](https://github.com/Reinoptland/dog-quiz/pull/7)**
- **[Bugfix/disable buttons on choice](https://github.com/Reinoptland/dog-quiz/pull/11)**

## My git workflow

In this project I try to use:

- Good commit messages
- Well named branches
- Pull requests with summaries


Here is my branching model for this project.

```
master (auto deploys) ______________________
                       \               /
development             \_____________/- pull request
                         \           /
feature/some-feature      \_commits_/- pull request
```

## My agile workflow and Trello board

I try to maintain a backlog eventhough I'm working on a project by myself. That way people can quickly jump in and start helping out. It also displays how I split up my tasks and try to build this project in an iterative and incremental way!

**[Check out my trelloboard here](https://trello.com/b/3gqJHfb6/dog-quiz)**

## Create React App

This project was scaffolded using the create-react-app cli. 

**[The standard create-react-app docs can be found in here](./create-react-app-docs.md)**
