import { useEffect } from 'react';
import content from '../data/privacyPolicy.json';
function PrivacyPolicy() {
    useEffect(() => {window.document.title = content.windowTitle},[]);
    return (
        <>
        <section id="privatPolicy">
            <div className="container">
                <div className="stylishCornerTreeColor rightCorner bigger">
                    <div className="titleSectionHolder pixelOrange">
                        <h1 className="h2">{content.titlePage}</h1>
                        <p>{content.lastChanges}</p>
                    </div>
                </div>
            </div>
            <div className="container bg-turquoise textPageWithLeftLine">
                <div className="contentHolder">
                    <article>
                        <h3 className="h3">{content.subTitle}</h3>
                        <p>{content.text}</p>
                    </article>
                </div>
            </div>
        </section>
        </>
    )
}
export default PrivacyPolicy;