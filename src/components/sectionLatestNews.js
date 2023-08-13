import content from '../data/HomePage.json';
import { labelReadMore } from '../data/labelNews.js';
import formatDate from '../helpers/formatDate.js';
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from 'react';
import {NC_API_KEY, NC_API_URL} from '../evn.js';
import { Link } from 'react-router-dom';
function SectionLatestNews(){
    const [newsList, setNewsList] = useState([]);
    const fetchCount = useRef(0);
    function fetchNews() {
        console.log(newsList);
        function getLastTwoNews(list) {
            setNewsList(list.splice(0,2))
        }
        //Jan 19, 2021
        if (fetchCount.current !== 0) return false;
        fetchCount.current++;
        const StorageNews = localStorage.getItem('newsList');
        if ((StorageNews !== null) && (StorageNews !== "undefined")) {
            const now = new Date().getTime();
            const lastUpdate = + localStorage.getItem('lastNewsUpdate');
            if (now - lastUpdate < ( 24 * 60 * 60 * 1000)) {
                getLastTwoNews(JSON.parse(StorageNews));
                return false;
            }
        }

        fetch(`${NC_API_URL}?q=development&lang=en&page=1&page_size=11&sort_by=date`, {
            method: 'GET',
            headers: {
                'x-api-key': NC_API_KEY
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            setNewsList(resp.articles);
            localStorage.setItem('newsList', JSON.stringify(resp.articles));
            localStorage.setItem('lastNewsUpdate', new Date().getTime());
            if (resp.status !== 'ok') {
                throw new Error(resp.error_code);
            }
        })
        .catch((error) => {
            toast.error(error.message, {position: "top-center", theme: "dark"})
        })
    }
    useEffect(()=> {
        fetchNews();
    }, [])
    return (
        <section className="bg-turquoise">
            <div className="container latersNews">
              <h2 className="h2 pixelViolete">{content.titleSectionLatestNews}</h2>
              <div className="twoColumns">
                {newsList.map((news, index) => {
                    return (<div className="leftImageBox" key={index}>
                                <div className="imgHolder">
                                    <img src={news.media} alt={news.title} />
                                </div>
                                <div className="textHolder">
                                    <span className="date">{formatDate(news.published_date)}</span>
                                    <h4 className="h4">{news.title}</h4>
                                    <Link to={`/news/${(news._id)}`} className="arrowLink"><span className="hoverEfectLinks">{labelReadMore}</span></Link>
                                </div>
                            </div>)
                })}
              </div>
            </div>
          </section>
    )
}
export default SectionLatestNews;