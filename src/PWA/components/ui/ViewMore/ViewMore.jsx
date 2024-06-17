import s from "./view-more.module.scss";

const ViewMore = ({ currentSet, totalSets, onClick }) => {
  return (
    <div className={s.viewMore}>
      <button onClick={onClick} className={s.viewMoreBtn}>
        View more results
      </button>
      <p className={s.setInfo}>Showing set {currentSet} of {totalSets}</p>
    </div>
  )
}

export default ViewMore