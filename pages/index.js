// import { useRouter } from "next/router";
// import useSWR from "swr";

// function fetcher(url) {
//   return fetch(url).then(r => r.json());
// }

// export default function Index() {
//   const { query } = useRouter();
//   const { data, error } = useSWR(
//     `/api/randomQuote${query.author ? "?author=" + query.author : ""}`,
//     fetcher
//   );
//   // The following line has optional chaining, added in Next.js v9.1.5,
//   // is the same as `data && data.author`
//   const author = data?.author;
//   let quote = data?.quote;

//   if (!data) quote = "Loading...";
//   if (error) quote = "Failed to fetch the quote.";

//   return (
//     <main className="center">
//       <div className="quote">{quote}</div>
//       {author && <span className="author">- {author}</span>}

//       <style jsx>{`
//         main {
//           width: 90%;
//           max-width: 900px;
//           margin: 300px auto;
//           text-align: center;
//         }
//         .quote {
//           font-family: cursive;
//           color: #e243de;
//           font-size: 24px;
//           padding-bottom: 10px;
//         }
//         .author {
//           font-family: sans-serif;
//           color: #559834;
//           font-size: 20px;
//         }
//       `}</style>
//     </main>
//   );
// }

import Layout from "../components/MyLayout";
import Link from "next/link";
import myImage from "../assets/images/job.jpg";

// const PostLink = props => (
//   <li>
//     <Link href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// );

const Page = () => (
  <body>
    <div id="mainTitle">
      <p>Bringing your dream job closer to you!</p>
    </div>
    {/* <div id="getStartBtn">
      <p>Get Started</p>
    </div> */}
    <div id="getStartBtn">
      <Link href="/">
        <a>Get Started</a>
      </Link>
    </div>
    <div id="card">
      <img className="card_image" src={myImage}></img>
    </div>
  </body>
);

export default Layout(Page);
