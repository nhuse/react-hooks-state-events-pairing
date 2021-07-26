import CommentList from "./CommentList"
import { useState } from "react"

export default function VideoInfo({ video }) {
    const [hideComments, setHideComment] = useState(false)
    const [likeCount, setLikeCount] = useState(video.upvotes)
    const [dislikeCount, setDislikeCount] = useState(video.downvotes)

    function handleUpVoteClick() {
        setLikeCount(likeCount + 1)
    }

    function handleDownVoteClick() {
        setDislikeCount(dislikeCount + 1)
    }

    function handleCommentClick() {
        setHideComment(!hideComments);
    }
    return (
        <>
            <h1>{video.title}</h1>
            <p>{video.views} views | Uploaded {video.createdAt}</p>
            <div>
                <button onClick={handleUpVoteClick}>{likeCount} 👍</button>
                <button onClick={handleDownVoteClick}>{dislikeCount} 👎</button>
            </div><br/>
            <button onClick={handleCommentClick}>{hideComments ? "Show Comments" : "Hide Comments"}</button><br/>
            {hideComments ? null : <CommentList comments={video.comments}/>}            
        </>
    )
}