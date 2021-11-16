import React,{useEffect} from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise'

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

// const sampleArticle = { // API 데이터를 받아오기전 샘플 데이터
// 	title: '제목',
// 	description: '내용',
// 	url: 'https://google.com',
// 	urlToImage: 'https://via.placeholder.com/160',
// };

const NewsList = ({category}) => {
    console.log('NewsList 실행 후',category)
    const [loading, response, error] = usePromise(() => {
        console.log('usePromise 실행 후')
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b0a1bfbe3a204409b77f16de76d03174`
        );
    }, [category])
    useEffect(() => {
        console.log('NewsList mount ');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    });
    useEffect(() => {
        console.log('NewsList update : ',category); 
        console.log('NewsList update loading : ',loading); 
        console.log('NewsList update response : ',response); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[category,loading,response]);
    // 대기 중일 때
    if(loading){ // true 일때 코드블록 내용을 보여주기, false일때 코드블록의 내용을 보여주지 않기
        return (
        <NewsListBlock>
             대기 중...
        {console.log('대기중')}
        </NewsListBlock>
        );
    }
    // 아직 response 값이 설정되지 않았을 때
    if(!response){
        return (null);
    }

    // 에러가 발생했을 때
    if(error){
        return <NewsListBlock>에러 발생!</NewsListBlock>;
    }

    // response 값이 유효할 때
    const {articles} = response.data;
  return (
		<NewsListBlock>
			{articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
            {/* {console.log(!articles)} false */}
		</NewsListBlock>
	);
};

export default NewsList;