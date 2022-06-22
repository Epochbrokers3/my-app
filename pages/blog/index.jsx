import Link from "next/link";

const Index = ({posts}) => {
    return (
        <ol>
           {/* {posts.map((post) => (
                <li>
                      <Link href={`/blog/${(post.id)}`} passHref>
                        <a  key={post.id}>{post.title}</a></Link>
                    </li>
            ))} */}
        </ol>
    );
}

export default Index;


export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://fakestoreapi.com/products/')
    const posts = await res.json()
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }