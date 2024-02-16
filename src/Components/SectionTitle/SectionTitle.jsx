

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="text-center mx-auto w-3/12">
            <p className="text-yellow-500">---{subHeading}---</p>
            <h1 className="text-4xl uppercase border-y-2 py-3 my-3">{heading}</h1>
        </div>
    );
};

export default SectionTitle;