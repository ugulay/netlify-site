import Layout from '@components/Layout'

export async function getStaticProps() {
    const configData = await import(`../siteconfig.json`)
    return {
        props: {
            title: configData.default.title,
            description: configData.default.description
        },
    }
}

function showMail() {
    var subject = `Hi, i found you from your website`;
    document.getElementById("myMail")
        .innerHTML = `<a href="mailto:ugurgulay@gmail.com?subject=${subject}">ugurgulay@gmail.com</a>`
}

const Index = ({title, description, ...props}) => {
    return (
        <Layout pageTitle={title} description={description}>

            <div className="profileWrapper">
                <div className="profile">

                    <img className="avatar" src="https://avatars1.githubusercontent.com/u/9683449?s=460&u=67996c2facea36883972365ececd4d4b67d6a055&v=4"/>

                    <h1>Hi, i'm <strong>Uğur Gülay</strong></h1>

                    <h3>You can find me from links below.</h3>

                    <p className="social" id="myMail" onClick={showMail}>E-Mail</p>

                    <p className="social"><a href="https://www.linkedin.com/in/ugurgulay/?utm_source=ugurgulay.com" target="_blank">Linkedin</a></p>

                    <p className="social"><a href="https://github.com/ugulay/?utm_source=ugurgulay.com" target="_blank">Github</a></p>

                    <p className="social"><a href="https://bitbucket.org/ugulay/?utm_source=ugurgulay.com" target="_blank">Bitbucket</a></p>

                    <p className="social"><a href="https://stackoverflow.com/users/11975868/u%c4%9fur-g%c3%bclay/?utm_source=ugurgulay.com" target="_blank">Stackoverflow</a></p>

                    <p className="social"><a href="https://www.instagram.com/ugur.gulay/?utm_source=ugurgulay.com" target="_blank">Instagram</a></p>

                    <p className="social"><a href="https://www.facebook.com/ParaBell/?utm_source=ugurgulay.com" target="_blank">Facebook</a></p>

                    <p className="social"><a href="https://steamcommunity.com/id/ugurgulay/?utm_source=ugurgulay.com" target="_blank">Steam</a></p>

                </div>
            </div>

        </Layout>
    )

}

export default Index

