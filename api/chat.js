import { appContext } from "../backend/context/appContext";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { message, context } = req.body;

  if (!message) {
    return res.json({
      response: "I'm here to help!"
    });
  }

  const lower = message.toLowerCase();

  if (lower.includes("attempt")) {
    return res.json({
      response: `You have ${context?.attemptsLeft ?? "unknown"} attempts remaining.`
    });
  }

  if (lower.includes("role")) {
    return res.json({
      response: `You are currently interviewing for the ${context?.role ?? "unknown"} role.`
    });
  }

  if (lower.includes("question")) {
    return res.json({
      response: `You are currently on question ${(context?.questionId ?? 0) + 1}.`
    });
  }

  {/*for (const item of appContext.faq) {
  if (item.triggers.some(trigger => lower.includes(trigger))) {
    return res.json({ response: item.answer });
  }
}*/}

  return res.json({
    response: "I'm not sure about that, but keep going — you’ve got this!"
  });
}