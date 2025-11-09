const CheckList = ({ checkList, handleFn }) => {
  const { title, list } = checkList;
  return (
    <div className="flex flex-col gap-3 py-5">
      <p className="text-2xl font-semibold">{title}</p>
      {list.map((item) => {
        return (
          <label className="flex items-center gap-2 text-xl">
            <input type="checkbox" name={`${item.name}`} onChange={handleFn} />
            {item.name} ({item.number})
          </label>
        );
      })}
    </div>
  );
};

export default CheckList;
