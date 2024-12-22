document.getElementById('idea-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const ideaInput = document.getElementById('idea-input');
    const ideasList = document.getElementById('ideas');

    const li = document.createElement('li');
    li.textContent = ideaInput.value;

    // Adding voting buttons
    const likeButton = document.createElement('button');
    likeButton.textContent = '👍 Like';
    const dislikeButton = document.createElement('button');
    dislikeButton.textContent = '👎 Dislike';

    likeButton.addEventListener('click', function() {
        alert('You liked this idea!');
    });

    dislikeButton.addEventListener('click', function() {
        alert('You disliked this idea!');
    });

    li.appendChild(likeButton);
    li.appendChild(dislikeButton);
    ideasList.appendChild(li);

    ideaInput.value = '';
});

document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const surveyQuestion = document.getElementById('survey-question');
    alert(`Thank you for your feedback: ${surveyQuestion.value}`);
    surveyQuestion.value = '';
});
