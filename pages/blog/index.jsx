import Link from "next/link";

const Index = () => {
    return (
        <div>
            <Link href="/profile" ><a>Profile</a></Link>
        </div>
    );
}

export default Index;


// export async function getStaticProps() {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     const res = await fetch('https://.../posts')
//     const posts = await res.json()
  
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         posts,
//       },
//     }
//   }