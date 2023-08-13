import { useState } from "react";
import content from "../data/CareerSubPage.json";
function TabContainer({data}) {
    const [activeState, setActiveState] = useState('details');
    function Tab({label, value}){
        return (
            <li className={(activeState === value) ? "active" :  ""} onClick={() => {setActiveState(value)}}>{label}</li>
        )
    }
    function TabContent() {
        let contentTab = [];
        contentTab = data[activeState];
        return (
            <div className="tabContent">
                    <div className="active">
                        <ul>
                            {contentTab.map((item, index) => <li key={index}>{item.point}</li>)}
                        </ul>
                    </div>
            </div>
        )
    }
    return (
        <div id="tabContainer" className="container bg-turquoise">
                <ul className="tabTitle">
                    <Tab value="details" label={content.lebelTab1} />
                    <Tab value="requirements" label={content.lebelTab2}  />
                    <Tab value="responsibilities" label={content.lebelTab3} />
                </ul>
                <TabContent />
            </div>
    )

}
export default TabContainer;