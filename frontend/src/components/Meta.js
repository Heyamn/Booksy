import React from "react"
import { Helmet } from "react-helmet"

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keyword' content={keywords}></meta>
		</Helmet>
	)
}

Meta.defaultProps = {
	title: "Welcome To Booksy",
	description: "We sell the best products for cheap",
	keywords: "Top quality artcrafts",
}

export default Meta
