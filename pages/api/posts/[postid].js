// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import posts from "../../../data/post.json";


(() => {
    posts.map((post, index) => post.id = index + 1);
    })()
/*
const addId = (inputArray) => {
    let copy = inputArray;
    copy.map((x, index) => x.id = index + 1);
}
*/
//addId(posts);

export default function handler(req, res) {
    const { postid } = req.query;
    const post = posts.find((post => post.id === parseInt(postid)));
    res.status(200).json({res: post});
}
