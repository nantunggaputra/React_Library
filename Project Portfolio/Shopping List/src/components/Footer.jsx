function Footer({ items }) {
  if (items.length === 0)
    return (
      <footer>
        <p className="stats">Oops, your shopping list has no item.</p>
        <p className="author">
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/nantungga-putra-451779116/"
            target="_blank"
          >
            Nantungga Putra
          </a>{" "}
          | &copy;2024
        </p>
      </footer>
    );
  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  let percentage = Math.round((checkedItems / totalItems) * 100);
  return (
    <footer>
      <p className="stats">
        There are {totalItems} items in your shopping list, {checkedItems} item{" "}
        <span>({isNaN(percentage) ? 0 : percentage}%)</span> has been purchased.
      </p>
      <p className="author">
        Created by{" "}
        <a
          href="https://www.linkedin.com/in/nantungga-putra-451779116/"
          target="_blank"
        >
          Nantungga Putra
        </a>{" "}
        | &copy;2024
      </p>
    </footer>
  );
}

export default Footer;
