import React, { useState } from "react";
import "./Portfolio.css";
const Portfolio = () => {
	const [activeFilter] = useState(0);

	return (
		<section className="portfolio container section" id="portfolio">
			<h2 className="section__title">Recent Projects</h2>

			<div className="portfolio__filters">
				<span className={activeFilter === 0 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} /* onClick={() => { setItems(Menu); setActiveFilter(0) }} */>
					All
				</span>
			</div>
			<p>No Projects Yet</p>
			<div className="portfolio__container grid">
			</div>
		</section>
	);
};

export default Portfolio;
