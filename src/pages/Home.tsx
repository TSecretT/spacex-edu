
const Home = () => {
    return (
        <div className="page">
            <div className="hero min-h-screen" style={{ backgroundImage: "url(https://www.spacex.com/static/images/backgrounds/f9_feature.webp)" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello</h1>
                    <h1 className="mb-5 text-4xl font-bold">welcome to SpaceX Launches</h1>
                    <p className="mb-5">This website is based on free and public data and aimed to populate the space topics</p>
                    <a href="/upcoming-launches" className="btn glass rounded-md hover:bg-primary">Get started</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;