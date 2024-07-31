import './skeleton.css'
function Skeleton({ Imagecount }) {
    const items = Array.from({ length: Imagecount }, (_, index) => index);
    return (
        <div className='skeleton-container'>
            {items.map(i => (
                <div key={i} className="skeleton-item"></div>
            ))}
        </div>
    )
}
export default Skeleton;