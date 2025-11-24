let current = 1;
let total = 0;
let score = 0;
let selectedOptionId = null;

async function init() {
    const r = await fetch('/api/questions/count');
    const data = await r.json();
    total = data.count || 0;
    loadQuestion(current);
}

async function loadQuestion(id) {
    selectedOptionId = null;
    document.getElementById('feedback').textContent = '';
    const res = await fetch(`/api/questions/${id}`);
    if (!res.ok) {
        document.getElementById('questionArea').textContent = 'No more questions.';
        document.getElementById('optionsList').innerHTML = '';
        showFinal();
        return;
    }
    const q = await res.json();
    document.getElementById('questionArea').textContent = `Q${id}. ${q.question}`;
    const ul = document.getElementById('optionsList');
    ul.innerHTML = '';
    q.options.forEach(opt => {
        const li = document.createElement('li');
        li.innerHTML = `<label><input type="radio" name="opt" value="${opt.id}"> ${opt.option_text}</label>`;
        ul.appendChild(li);
    });


    ul.querySelectorAll('input[name="opt"]').forEach(inp => {
        inp.addEventListener('change', () => {
            selectedOptionId = parseInt(inp.value, 10);
        });
    });
}

document.getElementById('submitBtn').addEventListener('click', async () => {
    if (!selectedOptionId) {
        alert('Choose an answer first');
        return;
    }
    const res = await fetch('/api/questions/answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionId: current, selectedOptionId })
    });
    const data = await res.json();
    if (data.correct) {
        document.getElementById('feedback').textContent = 'Correct! ✔';
        score++;
    } else {
        document.getElementById('feedback').textContent = `Wrong ✖ (correct option id: ${data.correctOptionId})`;
    }

    setTimeout(() => {
        current++;
        if (current > total) {
            showFinal();
        } else {
            loadQuestion(current);
            document.getElementById('scoreArea').textContent = `Score: ${score} / ${total}`;
        }
    }, 900);
});

function showFinal() {
    document.getElementById('questionArea').textContent = `Quiz finished! Final score: ${score} / ${total}`;
    document.getElementById('optionsList').innerHTML = '';
    document.getElementById('submitBtn').disabled = true;
    document.getElementById('feedback').textContent = '';
    document.getElementById('scoreArea').textContent = '';
}

init();
