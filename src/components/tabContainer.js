import { useState } from "react";

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
                    <Tab value="details" label="Details" />
                    <Tab value="requirements" label="Requirements"  />
                    <Tab value="responsibilities" label="Responsibilities" />
                </ul>
                <TabContent />
            </div>
    )

}
export default TabContainer;