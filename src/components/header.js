import MainNav from "./mainnav.js"

export default function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-sm-7">
                        <h1>Johnson's Seafood Shack</h1>
                    </div>
                    <div className="col-sm-2">
                        <img class="blueFish" src="https://www.jing.fm/clipimg/full/28-280028_fish-png-images-transparent-pictures-cartoon-fish-transparent.png" alt="Blue Fish" />
                    </div>
                    <div className="col-sm-3">
                        <MainNav></MainNav>
                    </div>
                </div>
            </div>
        </div>
    )
}