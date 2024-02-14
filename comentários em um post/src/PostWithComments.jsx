import React, { useState } from 'react';

function PostWithComments() {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');

  const addComment = () => {
    if (newCommentText.trim() !== '') {
      const newComment = {
        id: Date.now(),
        text: newCommentText,
      };
      setComments([...comments, newComment]);
      setNewCommentText('');
    }
  };

  return (
    <div>
      <h2>DEV NEWS !</h2>
      <p>Quentinhas DEV 🔥 </p>

      <input
        type="text"
        value={newCommentText}
        onChange={(e) => setNewCommentText(e.target.value)}
        placeholder="Digite seu comentário"
      />
      <button onClick={addComment}>Adicionar</button>

      {comments.length > 0 && (
        <>
          <h2>Comentários</h2>
          <ol>
            {comments.map((comment) => (
              <li key={comment.id}>{comment.text}</li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
}

export default PostWithComments;
