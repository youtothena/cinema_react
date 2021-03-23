import React from 'react';

const Props = ({name,picture}) => {
    return (
        <section>
            <img src={picture} alt='애니메이션 이미지'/>
            <h3>{name}</h3>
        </section>
    );
};

export default Props;