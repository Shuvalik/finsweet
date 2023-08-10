import content from '../data/processSection.json';
function SectionProcess({className}) {
    return (
        <section className={className}>
            <div className="container stylishCornerTreeColor rightCorner smaller">
                <div className="titleSectionHolder">
                    <p className="sectionTitle">{content.label}</p>
                    <h2 className="h2">{content.title}</h2>
                    <p>{content.text}</p>
                </div>
                <ul className="nubmerListBox">
                    {content.listProcess.map((item, index) => {
                        return (<li key={index}>
                        <span className="number">0{index+1}</span>
                        <div className={`${item.name} textHolder`}>
                            <p className="titleBox">{item.name}</p>
                            <p>{item.shortText}</p>
                        </div>
                        </li>)
                    })}
                </ul>
            </div>
          </section>
    )
}
export default SectionProcess;