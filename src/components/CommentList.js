import Comments from "./Comments"

export default function CommentList({ comments }){
    return (
        <div>
            <h1>{comments.length} Comments</h1>
            {comments.map(comment => (
                <Comments key={comment.id} commentUser={comment.user} comment={comment.comment}/>
            ))}
        </div>
    )
}
