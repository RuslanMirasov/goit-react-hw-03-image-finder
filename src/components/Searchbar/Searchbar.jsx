import css from './Searchbar.module.css';

export const Searchbar = ({ search }) => {
   return (
      <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={search}>
         <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
         </button>
         <input
            className={css.SearchFormInput}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
         />
      </form>
      </header>
   );
};