const BreadCrumb = ({ location }) => {
  const path = location.pathname.split("/").filter(Boolean);

  const pathName = ["Home", ...path];

  const pathNameFormatted = pathName.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
  });

  return (
    <div className="py-10">
      {pathNameFormatted.map((item, index) => {
        return index === pathNameFormatted.length - 1 ? (
          <span>{item}</span>
        ) : (
          <span>{item} &gt; </span>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
