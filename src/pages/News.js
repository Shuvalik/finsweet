import '../assets/scss/pages/news.scss';
import {NC_API_KEY} from '../evn.js';
import {TitleSectionRecent, TitleSectionAllNews} from '../data/labelNews.js';
import { useEffect, useRef, useState } from 'react';
import TrendingNews from '../components/sectionTendingNews';
import NewsItem from '../components/newsItem';
import SubScribe from '../components/subScribe';
function News() {
    const [newsList, setNewsList] = useState([]);
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
    function fetchNews() {
        if (fetchCount.current !== 0) return false;
        fetchCount.current++;
        const StorageNews = localStorage.getItem('newsList');
        if (StorageNews !== null) {
            const now = new Date().getTime();
            const lastUpdate = + localStorage.getItem('lastNewsUpdate');
            if (now - lastUpdate < ( 2 * 60 * 60 * 1000)) {
                const ns = JSON.parse(StorageNews);
                setNewsList(ns);
                const tnews = findTrendingNews(ns);
                setTrendNews(tnews);
                setRecentNews(findRecentNews(ns, tnews).lastN);
                setAllNews(findRecentNews(ns, tnews).allN);
                return false;
            }
        }

        fetch('https://api.newscatcherapi.com/v2/search?q=development&lang=en&page=1&page_size=11&sort_by=date', {
            method: 'GET',
            headers: {
                'x-api-key': NC_API_KEY
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            console.log(2);
            const ns = resp.articles;
            setNewsList(ns);
            const tnews = findTrendingNews(ns);
            setTrendNews(tnews);
            setRecentNews(findRecentNews(ns, tnews).lastN);
            setAllNews(findRecentNews(ns, tnews).allN);
            localStorage.setItem('newsList', JSON.stringify(resp.articles));
            localStorage.setItem('lastNewsUpdate', new Date().getTime());
            //  const textError = errorsMassege(response.status);
            //  throw new Error(textError);
        })
        // .catch((error) => {
        //     toast.error(error.message, {position: "top-center", theme: "dark"})
        // })

            
        
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