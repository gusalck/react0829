import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "어이",
        comment: "집에 가고 싶어요",
    },
    {
        name: "마현빈",
        comment: "너무 힘들어요",
    },
    {
        name: "너 말이야",
        comment: "저는 운동할거에요",
    },
]

function CommentList(props) {
    return(
        <div>
            {comments.map((comment) => {
                return(
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;