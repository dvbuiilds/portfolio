import type { NextApiRequest, NextApiResponse } from 'next';
import ytdl from 'ytdl-core';

type ResponseData = {
  message: string;
};

// type GETReturnType = { data: null; error: string } | { data: any; error: null };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Inside Handler');
  if (req.method === 'POST') {
    console.log('Inside POST handler.');
    try {
      const videoId: string = req.body;
      const info = await ytdl.getInfo(videoId);
      console.log({ info });
      res.status(200).json({ data: info, error: null });
    } catch (error) {
      return res.status(400).json({ data: null, error });
    }
  }
  res.status(404).json({ message: 'No Response!' });
}
