// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import google from "../assets/images/pay/app.jpg";
import play from "../assets/images/pay/play.jpg";
import pay from "../assets/images/pay/pay.png"

const Footer = () => {
	return (
		<>
			<div className="footer p-5">
				<div className="container-xxl">
					<div className="row">
						<div className="col-4 d-flex flex-column ">
							<h2 className="footer-title mb-2">Contact Us</h2>
							<div className="mb-2">
								<p>
									<b>Address:</b> Sultangonj Para,Bogura, 2nd floor
								</p>
							</div>
							<div className="mb-2">
								<p>
									<b>Phone:</b>
									<a className="footer-tel" href="tel:+1234567890">
										Call us at +1 (234) 567-890
									</a>
								</p>
							</div>
							<div className="mb-2">
								<p>
									<b>Hours:</b> From 8 a.m To 6 p.m
								</p>
							</div>
							<div className="mb-1">
								<p>
									<b>Follow the developer</b>
								</p>
							</div>
							<div className="mb-4 col-4 social-icons d-flex justify-content-around">
								<Link>
									<AiFillTwitterCircle className="fs-4" />
								</Link>
								<Link>
									<BsInstagram className="fs-4" />
								</Link>
								<Link>
									<BsFacebook className="fs-4" />
								</Link>
							</div>
						</div>
						<div className="col-2">
							<h3 className="mb-4">About</h3>
							<div className="footer-details d-flex flex-column">
								<Link className="mb-2">About Us</Link>
								<Link className="mb-2">Delivery</Link>
								<Link className="mb-2">Privact policy</Link>
								<Link className="mb-2">Tax policy</Link>
								<Link className="mb-2">Free policy</Link>
								<Link className="mb-2">Terms & Conditions</Link>
							</div>
						</div>
						<div className="col-2">
							<h3 className="mb-4">Account</h3>
							<div className="footer-details d-flex flex-column">
								<Link className="mb-2">Profile</Link>
								<Link className="mb-2">View Cart</Link>
								<Link className="mb-2">Help</Link>
								<Link className="mb-2">Payments</Link>
								<Link className="mb-2">My whishlet</Link>
								<Link className="mb-2">Coupons</Link>
							</div>
						</div>
						<div className="col-4">
							<h3 className="mb-3">Install App</h3>

							<div className="footer-details">
								<p>Available on Google play Service & Playstore</p>
								<div className="pay">
									<Link>
										<img src={google} alt="" className="img-fluid p-1 " />
									</Link>
									<Link>
										<img src={play} alt="" className="img-fluid p-1 "/>
									</Link>
								</div>
								<p className="mb-4">Payment Methods</p>
								<Link className="pay">
									<img src={pay} alt="" className="img-fluid p-2"/>
								</Link>
							</div>
						</div>
						<hr />
						<div className="row d-flex justify-content-between">
							<div className="col-3">
								<p>&copy; DEVELOPED BY REZWAN, 2023</p>
							</div>
							<div className="col-3 d-flex justify-content-around text-black">
								<Link>Privacy Policy</Link>
								<Link>Terms of use</Link>
								<Link>Contact me</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
