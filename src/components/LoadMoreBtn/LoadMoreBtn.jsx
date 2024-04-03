import css from './LoadMoreBtn.module.css'

function LoadMoreBtn({onSubmit}) {

return <button onClick= {onSubmit} type="button" className={css.loadBtn}>
  Load more
</button>;
}

export default LoadMoreBtn;
