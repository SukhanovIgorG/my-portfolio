import { Header } from "../../components";

const BlogPage = () => {
  return (
    <>
      <Header></Header>
      <main>
        <h2>Blog</h2>
        {Array.from({ length: 55 }).map((_, index) => (
          <p key={index}>some text lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        ))}
        <p>some text</p>
      </main>
    </>
  )
};

export default BlogPage