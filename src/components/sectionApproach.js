import svgSprite from './../assets/images/icons-sprite.svg';
import content from '../data/CompanyPage.json';
function SectionApproach(){
    const approach = content.sectionApproach;

    return (
        <section className="bg-turquoise">
            <div className="container twoColumns approach">
              <div>
                  <p className="sectionTitle">{approach.label}</p>
                  <h2 className="h2">{approach.title}</h2>
                  <p>{approach.text}</p> 
              </div>
              <div className="verticalListBox pixelBlue">
                {approach.teasers.map((item, index) => {
                    return (<div className="item" key={index}>
                                <svg>
                                    <use xlinkHref={svgSprite + item.iconId} />
                                </svg>
                                <div>
                                    <p className="titleItem">{item.title}</p>
                                    <p>{item.text}</p>
                                </div>
                            </div>)
                    })
                }
              </div>
            </div>
          </section>
    )
}
export default SectionApproach;