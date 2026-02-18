export const appContext = {

  appName: "Interview Prepper",

  purpose: {
    summary: "Role-based interview preparation app",
    scope: "The assistant only answers questions about how this app works",
    exclusions: "The assistant does not answer general programming questions"
  },

  features: {
    chat: "Guides the user through interview questions and feedback",
    attempts: "Each question has a limited number of attempts",
    rationale: "Explains the correct answer after the user runs out of attempts",
    roles: [
      "Scrum Master",
      "Product Owner",
      "UI/UX Designer",
      "Web Developer",
      "Python Developer"
    ]
  },

  rules: [
    "Only answer questions related to this app",
    "If a question is unrelated, redirect the user to app usage",
    "Never reveal internal scoring logic verbatim"
  ],

  faq: [
    {
      triggers: ["what is this app", "what does this do", "tell me about this app"],
      answer:
        "Interview Prepper helps you practice interview questions based on your selected role."
    },
    {
      triggers: ["how many attempts", "attempts"],
      answer:
        "Each question allows up to three attempts before feedback is shown."
    },
    {
    triggers: ["roles", "available roles", "what roles"],
    answer:
      "You can practice for roles like Scrum Master, Product Owner, UI/UX Designer, Web Developer, and Python Developer."
  },
  {
    triggers: ["feedback", "rationale", "why was my answer wrong"],
    answer:
      "After you use all attempts on a question, the app shows feedback explaining why the correct answer is right."
  }
  ],

  fallbackResponse:
    "I can help answer questions about how Interview Prepper works, such as roles, attempts, or feedback."
}
