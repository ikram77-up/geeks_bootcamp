// server/controllers/questionController.js
import * as model from '../models/question.js';

export async function getQuestion(req, res) {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ error: 'Invalid id' });

    const question = await model.getQuestionById(id);
    if (!question) return res.status(404).json({ error: 'Not found' });

    // hide correct_answer_id from client, but we'll use it when evaluating answers
    const { correct_answer_id, ...clientQuestion } = question;
    res.json(clientQuestion);
}

export async function getCount(req, res) {
    const count = await model.getQuestionsCount();
    res.json({ count });
}

export async function checkAnswer(req, res) {
    const { questionId, selectedOptionId } = req.body;
    if (!questionId || !selectedOptionId) return res.status(400).json({ error: 'Missing data' });

    const q = await model.getQuestionById(questionId);
    if (!q) return res.status(404).json({ error: 'Question not found' });

    const correct = q.correct_answer_id === selectedOptionId;
    res.json({
        correct,
        correctOptionId: q.correct_answer_id
    });
}
