import {labelTrading, labelReadMore, labelPostedOn} from '../data/labelNews.js';
import formatDate from '../helpers/formatDate.js';
import { NavLink } from 'react-router-dom';
function TrendingNews({news, type}) {
    //console.log('27th January 2021');
    return (
        <div className="stylishCornerTreeColor mainNews rightCorner bigger">
            <div className="titleSectionHolder pixelOrange">
                {(type === "pageNews") ? <p className="sectionTitle">{labelTrading}</p> : null}
                <h1 className="h2">{news.title}</h1>
                <p>{news.excerpt}</p>
                {(type === "pageNews") ? <p><NavLink to={`/news/${(news._id)}`} className="arrowLink read-more"><span className="hoverEfectLinks">{labelReadMore}</span></NavLink></p> : null}
                <div className="authorInfo">
                    <span className="name">{news.author}</span>
                    <span className="publishDate">{labelPostedOn}{formatDate(news.published_date)}</span>
                </div>
            </div>
            <div className={(type === "detailPageNews") ? "imageHolder bottonRightColorLine fullWidth" : "imageHolder bottonRightColorLine"}>
                <img src={news.media} alt="{news.title}" />
            </div>
        </div>
    )
}
export default TrendingNews;