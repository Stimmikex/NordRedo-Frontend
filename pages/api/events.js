export default function handler(req, res) {
    if (req.method === 'POST') {
      res.json('why')
    } else {
      // Handle any other HTTP method
    }
  }