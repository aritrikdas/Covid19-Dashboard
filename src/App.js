import React, { Component } from "react"
// import Navigation from "./app/Navigation"
import PageContent from "./app/PageContent"
import Footer from "./app/Footer"
//import Sidemenu from "./app/Sidemenu"


export default class App extends Component {
	render() {
		return (
			<div id="pcoded" className="pcoded">
				<div className="pcoded-container">
					<div className="pcoded-wrapper">
						<div className="pcoded-content">
							<div className="pcoded-inner-content">
								<div className="main-body">
									<div className="page-wrapper">
										<div className="page-body m-t-20">
											<PageContent></PageContent>
											<Footer></Footer>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


