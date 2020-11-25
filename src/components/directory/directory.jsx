import React, { Component } from 'react';

import MenuItem from '../login/menu-item/menu-item';
import './directory.scss';

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats',
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: '',
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: '',
                },
                {
                    title: 'women',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    imageSize: 'large',
                    id: 4,
                    linkUrl: '',
                },
                {
                    title: 'men',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    imageSize: 'large',
                    id: 5,
                    linkUrl: '',
                },
            ],
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {/* We make use of object destructuring 
                    on the {title, imageUrl and id} */}
                {this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }
}

export default Directory;
