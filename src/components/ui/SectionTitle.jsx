
const SectionTitle = ({title}) => {
    return (
        <div className="text-center text-[clamp(1.75rem,2vw,2.5rem)] py-4 font-semibold text-primary">
            <p>{title}</p>
        </div>
    );
};

export default SectionTitle;