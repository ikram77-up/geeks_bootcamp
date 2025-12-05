function Card({ icon, title, text }) {
    return (
        <div className="ccntainer py-4">
            <div className="row align-items-center  shadow-sm p-3 mb-4 bg-light rounded">
                <div className="col-2 text-center">
                    <i className={`${icon} fa-3x text-danger`}></i>
                </div>
                <div className="col-10">
                    <h3 className="fw-bold">{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}
export default Card;