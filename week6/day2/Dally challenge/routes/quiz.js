import express from "express";

const router = express.Router();

const triviaQuestions = [
    {
        question: "What is the capital of France?",
        answer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars",
    },
    {
        question: "What is the largest mammal in the world?",
        answer: "Blue whale",
    },
];

let score = 0;
let currentQuestionIndex = 0;

router.get("/", (req, res) => {
    res.send("API is running ");
});

router.get("/quiz", (req, res) => {
    score = 0;
    currentQuestionIndex = 0;
    const question = triviaQuestions[currentQuestionIndex].question;
    res.status(200).json({
        message: "quiz started",
        questionNumber: currentQuestionIndex + 1,
        question,
    });
});

router.post("/quiz", (req, res) => {
    try {
        const { answer } = req.body;

        if (!answer) {
            return res.status(400).json({ message: "Answer is required" });
        }

        const correctAnswer = triviaQuestions[currentQuestionIndex].answer;
        let feedback = "";

        if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
            score++;
            feedback = "✅ Correct answer!";
        } else {
            feedback = ` ❌Wrong answer. The correct one was: ${correctAnswer}`;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < triviaQuestions.length) {
            const nextQuestion = triviaQuestions[currentQuestionIndex].question;
            return res.status(200).json({
                feedback,
                nextQuestionNumber: currentQuestionIndex + 1,
                nextQuestion,
            });
        }

        const finalScore = score;

        score = 0;
        currentQuestionIndex = 0;

        return res.status(200).json({
            message: "Quiz completed!",
            feedback,
            finalScore,
            totalQuestions: triviaQuestions.length,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/quiz/score", (req, res) => {
    res.status(200).json({ score });
});


export default router