import React,{useEffect} from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = ({match}) => {
    // 카테고리가 선택되지 않았으면 기본값 all로 사용
    const category = match.params.category || 'all';

    useEffect(() => {
          console.log('NewsPage ');
      // eslint-disable-next-line react-hooks/exhaustive-deps
      });

    return (
        <>
            <Categories />
            <NewsList category={category} />
            {/* {console.log(match)} */}
        </>
    );
};

export default NewsPage;