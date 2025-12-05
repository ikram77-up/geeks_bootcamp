function Contact() {
    return (
        <div className="container py-5">
            <h3 className="text-center mb-4">Contact us</h3>

            <div className="row justify-content-center">
                <div className="col-md-6 shadow-sm bg-light p-4 rounded">

                    <label className="fw-bold">Contact</label>
                    <input type="email" className="form-control mb-3" placeholder="email address" />

                    <textarea className="form-control mb-3" rows="4" placeholder="comment"></textarea>

                    <button className="btn btn-danger w-100">Send</button>
                </div>

                <div className="col-md-4 mt-4 mt-md-0">
                    <p>Contact us and we will get back to you within 24 hours.</p>
                    <p><strong>Company Name</strong></p>
                    <p><i className="fas fa-phone"></i> +212 6 72 789 000</p>
                    <p><i className="fas fa-envelope"></i> company@gmail.com</p>
                </div>
            </div>
        </div>
    );
}
export default Contact;