import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Hero from './components/Hero';

HeroFeature.propTypes = {
};

function HeroFeature(props) {
    const [count, setCount] = useState(0);




    //useMemo => dùng cho giá trị và trả về giá trị cũ(mảng, ...) khi re-render
    //const data = useMemo(() => [{}, {}, {}], []);

    //usecallback => dùng cho function và trả về hàm cũ khi re-render
    const handleHeroClick = useCallback(() => { }, []);

    //hạn chế dùng 2 ông này, chỉ dùng khi thấy project chạy khá nặng và cần tối ưu

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>

            <Hero name="Supermen" onClick={handleHeroClick} />
        </div >
    );
}

export default HeroFeature;