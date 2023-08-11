import formatDate from '../helpers/formatDate.js';
import { NavLink } from 'react-router-dom';
function NewsItem({news, type}) {
    //console.log("Jan 19, 2021");
    return (
        <div className={(type === "smallBox") ? "newsItem" : "newsBox"}>
            <div className="imageHolder">
                <NavLink to={`/news/${(news._id)}`} className="maskLink" />
                <img src={news.media} alt={news.title} />
            </div>
            <div className="textHolder">
                <div className="titleBox">
                    <h4 className="h4">{news.title}</h4>
                    <NavLink to={`/news/${(news._id)}`} className="maskLink" />
                </div>
                {(type === "smallBox") ? <p>{news.excerpt}</p> : null}
                <div className="authorInfo">
                        <span className="name">{news.author}</span>
                        <span className="publishDate">{formatDate(news.published_date)}</span>
                </div>
            </div>
        </div>
   
    )
}
export default NewsItem;