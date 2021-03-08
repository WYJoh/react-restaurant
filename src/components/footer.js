import MainNav from "./mainnav.js"

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-5">
                        <MainNav></MainNav>
                    </div>
                    <div className="col-sm-5">
                        [ social media icons ]
                    </div>
                    <div className="col-sm-2">
                        &copy; 2021
                    </div>
                </div>
            </div>
        </div>
    )
}