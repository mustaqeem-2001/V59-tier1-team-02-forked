# voyage-tasks

Your project's `readme` is as important to success as your code. For 
this reason you should put as much care into its creation and maintenance
as you would any other component of the application.

If you are unsure of what should go into the `readme` let this article,
written by an experienced Chingu, be your starting point - 
[Keys to a well written README](https://tinyurl.com/yk3wubft).

And before we go there's "one more thing"! Once you decide what to include
in your `readme` feel free to replace the text we've provided here.

> Own it & Make it your Own!

## Team Documents

You may find these helpful as you work together to organize your project.

- [Team Project Ideas](./docs/team_project_ideas.md)
- [Team Decision Log](./docs/team_decision_log.md)

Meeting Agenda templates (located in the `/docs` directory in this repo):

- Meeting - Voyage Kickoff --> ./docs/meeting-voyage_kickoff.docx
- Meeting - App Vision & Feature Planning --> ./docs/meeting-vision_and_feature_planning.docx
- Meeting - Sprint Retrospective, Review, and Planning --> ./docs/meeting-sprint_retrospective_review_and_planning.docx
- Meeting - Sprint Open Topic Session --> ./docs/meeting-sprint_open_topic_session.docx

## Our Team

Everyone on your team should add their name along with a link to their GitHub
& optionally their LinkedIn profiles below. Do this in Sprint #1 to validate
your repo access and to practice PR'ing with your team *before* you start
coding!

- Teammate Eleni #1: [GitHub](https://github.com/elenhpapadima) / [LinkedIn](https://www.linkedin.com/in/eleni-papadima/)
- Teammate Michael #2: [GitHub](https://github.com/djzsmk) / [LinkedIn](https://www.linkedin.com/in/michaeljamesdevolper/)
- Teammate Mustaqeem #3: [GitHub](https://github.com/mustaqeem-2001) / [LinkedIn](https://www.linkedin.com/in/mustaqeem-c-3a3875208/)
- Teammate Furtuna #4: [GitHub](https://github.com/Furtuna11) / [LinkedIn](https://www.linkedin.com/in/furtuna-hab/)
- Teammate Maryann #5: [GitHub](https://github.com/mary1na-code) / [LinkedIn](https://www.linkedin.com/in/maryann-igwe-oruta-374309318)
- Teammate Jenardo #6: [GitHub](https://github.com/Jzitam) / [LinkedIn](https://www.linkedin.com/in/jenardo-walker)



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


🎯 Interview Prepper

Interview Prepper is a role-based interview practice app built with React and deployed on Vercel. The app guides users through a set of questions for a selected role, allowing up to three attempts per question and providing feedback and rationale for answers.

⚡ Features

Select a role (Scrum Master, Product Owner, UI/UX Designer, Web Developer, Python Developer)

Practice questions with 3 attempts per question

Receive immediate feedback after a correct answer or after three wrong attempts

View a results page showing your score and rationale for each question

Chat assistant for help and guidance, integrated as a pop-up

📝 How it Works

Select a role from the available options.

Answer the questions.

Each question allows up to 3 attempts.

After a correct answer or 3 wrong attempts, feedback is shown:

Why the correct answer is correct (rationale)

Which option was selected first

At the end, see a results page with your total score and feedback for all questions.

💬 Chat Assistant

Ask questions about the app, attempts, roles, or feedback.

The assistant is context-aware and can tell you:

Your remaining attempts

The role you are practicing for

Which question you are currently on

Pop-up chat for easy access while practicing.

🚀 Deployment

Frontend: React

Backend / API: Serverless API for chat functionality

Hosting: Vercel

📦 Future Enhancements

Persist chat history between sessions

Add more roles and question sets

Improve UI/UX with animations and theming

Track overall progress over multiple sessions

⚙️ Notes

Users get 3 attempts per question

Feedback is only shown after all attempts are used or a correct answer

Results page shows percentage score and rationale for every question