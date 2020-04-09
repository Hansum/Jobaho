const ArticleLayout = ({ uniqueKey, children }) => (
  <article className="job-card" key={uniqueKey}>
    {children}
  </article>
);

export default ArticleLayout;
