import Layout from '@components/Layout'
import PostList from '@components/PostList'
import getPosts from '@utils/getPosts'

const Posts = ({posts, title, description, ...props}) => {
    return (
        <Layout pageTitle={`${title} | Posts`} description={description}>
            <h1 className="title">Posts written by me : </h1>
            <PostList posts={posts}/>
        </Layout>
    )
}

export async function getStaticProps() {
    const configData = await import(`../siteconfig.json`)

    const posts = ((context) => {
        return getPosts(context)
    })(require.context('../posts', true, /\.md$/))

    return {
        props: {
            posts,
            title: configData.default.title,
            description: configData.default.description,
        }
    }
}

export default Posts