import React, { Component } from 'react';

import MenuItem from '../menu-item/menu-item';
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
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                },
                {
                    title: 'women',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    imageSize: 'large',
                    id: 4,
                },
                {
                    title: 'men',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    imageSize: 'large',
                    id: 5,
                },
            ],
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {/* We make use of object destructuring 
                    on the {title, imageUrl and id} */}
                {this.state.sections.map(({ title, imageUrl, id, imageSize}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} sizeClass={imageSize} />
                ))}
            </div>
        );
    }
}

export default Directory;
