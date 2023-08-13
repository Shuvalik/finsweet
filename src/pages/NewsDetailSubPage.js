import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import TrendingNews from '../components/sectionTendingNews';
import SubScribe from '../components/subScribe';
function NewsDetail() {
    const [newsItem, setNewsItem] = useState({})
    const {hash} = useParams()
console.log(useLocation());
    useEffect(()=>{
        setNewsItem(JSON.parse(localStorage.getItem('newsList')).find((item) => item._id === hash))
    }, [])
    return (
        <>
        <section>
            <div className="container">
                <TrendingNews news={newsItem} type="detailPageNews" />                
                <div className="newsDetailsPage">
                    <div className="contentHolder">
                        <p>{newsItem.summary}</p>
                    </div>
                </div>

            
            </div>    
        </section>
        <section>
            <SubScribe />
        </section>
        </>
    )
}
export default NewsDetail;