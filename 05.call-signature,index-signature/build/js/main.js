"use strict";
const post1 = {
    id: 1,
    title: 'post 1',
    getLikeNumber(like) {
        return like;
    }
};
post1.getLikeNumber(1);
const post2 = {
    id: 1,
    title: 'post 2',
};
post2['description'] = 'description 1';
post2['pages'] = 400;
const userNames = ['Kim', 'Park', 'Lee'];
//userNames[0] === 'Kim'
