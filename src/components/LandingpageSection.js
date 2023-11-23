const LandingpageSection = ({ title, text, image }) => {
    return (
        <div className="page-sec">
            <div className="container">
                <div className="page-text">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <div className="page-img">
                    <img src={image} alt="image" />
                </div>
            </div>
        </div>
    )
}
export default LandingpageSection