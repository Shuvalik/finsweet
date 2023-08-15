import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { labelReadMore, windowTitle } from '../data/labelNews.js';
import TrendingNews from '../components/sectionTendingNews';
import SubScribe from '../components/subScribe';
import { Link } from 'react-router-dom';
function NewsDetail() {
    const [newsItem, setNewsItem] = useState({})
    const {hash} = useParams();
    useEffect(()=>{
        setNewsItem(JSON.parse(localStorage.getItem('newsList')).find((item) => item._id === hash));
        window.document.title = windowTitle;
    }, [])
    return (
        <>
        <section>
            <div className="container">
                <article>
                    <TrendingNews news={newsItem} type="detailPageNews" />                
                    <div className="newsDetailsPage">
                        <div className="contentHolder">
                            <p>{newsItem.summary}</p>
                            <Link to={newsItem.link} className="arrowLink" target="_blank"><span className="hoverEfectLinks">{labelReadMore}</span></Link>
                        </div>
                    </div>
                </article>
            </div>    
        </section>
        <section>
            <SubScribe />
        </section>
        </>
    )
}
export default NewsDetail;