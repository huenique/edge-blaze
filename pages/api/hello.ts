import { StatusCodes } from 'http-status-codes';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function name(req: NextRequest) {
  return new Response(
    JSON.stringify({
      message: 'Hello World',
    }),
    {
      status: StatusCodes.OK,
      headers: {
        'content-type': 'application/json',
      },
    }
  );
}
