export async function get({ params }) {
  const { post } = params;

  const thispost = {post: post}

  return new Response(JSON.stringify(thispost.post), {
    status: 200
  });
}
