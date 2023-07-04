// /pages/api/posts.js



import posts from '../../data/post.json';
export default function handler(req, res) {
    res.status(200).json(posts);
/*    switch (req.method) {
    case 'GET':
      //...
      break
    case 'POST':
      //...
      break
    case 'PUT':
      //...
      break
    case 'DELETE':
      //...
      break
    default:
      res.status(405).end() // Method not allowed
      break
  }*/
}
