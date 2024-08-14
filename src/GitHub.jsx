import React from "react";
import profilePic from "./assets/avatar-jessica.jpeg";
const GitHub = () => {
	return (
		<div className="div1">
			<div className="div">
				<div className="img">
					<img
						src={profilePic}
						alt="Image is not available"
					/>
				</div>
				<div className="name">
					<h1> Jessica Randall</h1>
				</div>
				<div className="area">
					<h4> London, United Kingdom</h4>
				</div>
				<div className="fn">
					<h5>
						{" "}
						<a href=""></a> "Front-end developer and avid reader."
					</h5>
				</div>
				<div className="butns">
					<div className="gh">
						<h3>
							{" "}
							<a
								className="link"
								href="https://github.com/"
								target="_blank">
								{" "}
								GitHub
							</a>
						</h3>
					</div>
					<div className="fm">
						<h3>
							{" "}
							<a
								className="link"
								href="https://www.frontendmentor.io/home"
								target="_blank">
								Frontend Mentor
							</a>{" "}
						</h3>
					</div>
					<div className="li">
						<h3>
							{" "}
							<a
								className="link"
								href="https://www.linkedin.com/feed/"
								target="_blank"
								color="white">
								LinkedIn
							</a>{" "}
						</h3>
					</div>
					<div className="x">
						<h3>
							{" "}
							<a
								className="link"
								href="https://x.com/home"
								target="_blank">
								Twitter
							</a>
						</h3>
					</div>
					<div className="in">
						<h3>
							{" "}
							<a
								className="link"
								href="https://www.instagram.com/"
								target="_blank">
								Instagram
							</a>
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GitHub;
