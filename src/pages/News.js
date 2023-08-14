import '../assets/scss/pages/news.scss';
import {NC_API_KEY, NC_API_URL} from '../evn.js';
import { toast } from "react-toastify";
import {TitleSectionRecent, TitleSectionAllNews} from '../data/labelNews.js';
import { useEffect, useRef, useState } from 'react';
import TrendingNews from '../components/sectionTendingNews';
import NewsItem from '../components/newsItem';
import SubScribe from '../components/subScribe';
function News() {
    const fetchCount = useRef(0);
    const [trendNews, setTrendNews] = useState({});
    const [recentNews, setRecentNews] = useState([]);
    const [allNews, setAllNews] = useState([]);
    function findTrendingNews(list) {
        const maxRank = list.reduce((max, item) => (item.rank > max.rank) ? item : max, list[0]);
        return maxRank;
    }
    function findRecentNews(list, tnews) {
        const listN = list.filter((item) => (item._id !== tnews._id));
        return {
            lastN: listN.splice(0, 4),
            allN: listN
        };
    }
    function resolveResult(ns) {
        const tnews = findTrendingNews(ns);
        setTrendNews(tnews);
        setRecentNews(findRecentNews(ns, tnews).lastN);
        setAllNews(findRecentNews(ns, tnews).allN);
    }
    function fetchNews() {
        if (fetchCount.current !== 0) return false;
        fetchCount.current++;
        const StorageNews = localStorage.getItem('newsList');
        if ((StorageNews !== null)  && (StorageNews !== "undefined")) {
            const now = new Date().getTime();
            const lastUpdate = + localStorage.getItem('lastNewsUpdate');
            if (now - lastUpdate < ( 24 * 60 * 60 * 1000)) {
                resolveResult(JSON.parse(StorageNews));
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
            if (resp.status !== 'ok') {
                throw new Error(resp.error_code);
            } else {
                localStorage.setItem('newsList', JSON.stringify(resp.articles));
                localStorage.setItem('lastNewsUpdate', new Date().getTime());
                resolveResult(resp.articles);
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
    <>
        <section>
            <div className="container">
                <TrendingNews news={trendNews} type="pageNews" />
                <div className="resentListNews">
                    <h2 className="h2">{TitleSectionRecent}</h2>
                    <div className="listNews">
                        {recentNews.map((item, index) => <NewsItem news={item} key={index} />)}
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-grey">
            <div className="container allNewsList">
                <h2 className="h2">{TitleSectionAllNews}</h2>
                <div className="listNews">
                    {allNews.map((item, index) => <NewsItem news={item} key={index} type="smallBox" />)}
                </div>
            </div>
        </section>
        <section>
            <SubScribe />
        </section>
   </>
    )
}
export default News;