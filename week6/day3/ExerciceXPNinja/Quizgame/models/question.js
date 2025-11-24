// server/models/questionModel.js
import { db } from '../config/db_connect.js';

export async function getQuestionById(id) {
    const q = await db.query(
        `SELECT q.id, q.question, q.correct_answer_id
     FROM questions q WHERE q.id = $1`, [id]
    );
    if (q.rows.length === 0) return null;

    const options = await db.query(
        `SELECT o.id, o.option_text
     FROM options o
     JOIN questions_options qo ON o.id = qo.option_id
     WHERE qo.question_id = $1`, [id]
    );

    return {
        ...q.rows[0],
        options: options.rows
    };
}

export async function getQuestionsCount() {
    const res = await db.query(`SELECT COUNT(*) FROM questions`);
    return parseInt(res.rows[0].count, 10);
}
