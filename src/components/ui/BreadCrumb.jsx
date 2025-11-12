const BreadCrumb = ({ location }) => {
  const path = location.pathname.split("/").filter(Boolean);

  const pathName = ["Home", ...path];

  const pathNameFormatted = pathName.map((item) => {
    const decode = decodeURIComponent(item)
    return decode.charAt(0).toUpperCase() + decode.slice(1);
  });

  return (
    <div className="py-10 font-medium">
      {pathNameFormatted.map((item, index) => {
        return index === pathNameFormatted.length - 1 ? (
          <span className="text-primary" key={index}>{item}</span>
        ) : (
          <span key={index}>{item} &gt; </span>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
