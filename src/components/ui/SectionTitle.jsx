const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center pb-10">
      <p className="text-[clamp(1.75rem,2vw,2.5rem)] font-semibold text-primary">
        {title}
      </p>
      {subTitle && (
        <p className="text-[clamp(1rem,2vw,1.3rem)] ">{subTitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
