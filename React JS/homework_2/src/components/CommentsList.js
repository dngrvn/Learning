import { useState } from "react";
import "./CommentsList.css";

function CommentsList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);
  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };
  return (
    <ul className="comments_list">
      {comments.map((comment) => (
        <li key={comment.id} className="comment_item">
          <div className="item_box">
            <p>{comment.text}</p>
            <button onClick={() => deleteComment(comment.id)}>Удалить</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentsList;
