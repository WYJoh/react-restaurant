import MainNav from "./mainnav.js"

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <MainNav></MainNav>
                    </div>
                    <div className="col-sm-5">
                        [ social media icons ]
                    </div>
                    <div className="col-sm-1">
                        <small>&copy; 2021</small>
                    </div>
                </div>
            </div>
        </div>
    )
}