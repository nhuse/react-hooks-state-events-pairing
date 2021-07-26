export default function Comments({ commentUser, comment }) {
    return (
        <div>
            <h3>{commentUser}</h3>
            <p>{comment}</p>
        </div>
    )
}