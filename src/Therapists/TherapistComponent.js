
export default function TherpistComponent(props) {
    const {name, age, description, img} = props

    return (
        <div className="therapists-list">
            <div>
                <img
                    id="prfBgImg"
                    src={img}
                    alt=""
                    srcSet=""
                    className="therapist-image"
                />
            </div>
            <div className="therapist-info">
                <h2 className="therapist-name">{name}</h2>
                <h3 className="therapist-age">Age: {age}</h3>
                <h4 className="therapist-about">About: {description} </h4>
            </div>
        </div>

    );
}