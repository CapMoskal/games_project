interface Props {
  loadNextPage: () => void
  loadPrevPage: () => void
  pageCount: number
  noMoreGames: boolean
}

export const PagButtons = ({
  pageCount,
  noMoreGames,
  loadNextPage,
  loadPrevPage,
}: Props) => (
  <div className="pag-btns">
    <button
      className="pag-btns--btn"
      onClick={() => loadPrevPage()}
      disabled={pageCount === 1}
    >
      {'<'}
    </button>
    <h3 className="page-btns--count">{pageCount}</h3>
    <button
      disabled={noMoreGames}
      className="pag-btns--btn"
      onClick={() => loadNextPage()}
    >
      {'>'}
    </button>
  </div>
)
