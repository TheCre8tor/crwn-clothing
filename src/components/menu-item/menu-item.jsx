import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.scss';

const MenuItem = ({ title, imageUrl, sizeClass, linkUrl, history, match }) => {
    /* The history & match props was extracted with the 
       help of withRouter() component at the export section
       at the bottom of the page instead of facing a 
       props drilling or passing endless props */
    return (
        <div className={`${sizeClass} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <p className="subtitle">SHOP NOW</p>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);
