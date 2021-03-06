const projects = [
	{
		name: 'amazing-mountain'
	},
	{
		name: 'band-responsive'
	},
	{
		name: 'bc-1.1'
	},
	{
		name: 'bc-1.2'
	},
	{
		name: 'bc-2.1-width'
	},
	{
		name: 'bc-2.2-em'
	},
	{
		name: 'bc-2.3-flexbox'
	},
	{
		name: 'bc-2.5-nav-1'
	},
	{
		name: 'bc-2.6-nav-2'
	},
	{
		name: 'bc-2.7-nav-3'
	},
	{
		name: 'bc-2.8-simple'
	},
	{
		name: 'bc-3.1-bbq'
	},
	{
		name: 'bc-4.1-techtips'
	},
	{
		name: 'bc-5.1-article-simple'
	},
	{
		name: 'bc-5.2-portfolio-grid'
	},
	{
		name: 'bc-6.1-jake'
	},
	{
		name: 'brewery-website'
	},
	{
		name: 'conq-nav-challenge'
	},
	{
		name: 'conq-responsive-made-easy'
	},
	{
		name: 'demyst-blog-page'
	},
	{
		name: 'demyst-overlooked'
	},
	{
		name: 'demyst-magic-design-v4'
	},
	{
		name: 'demyst-final-project-home'
	},
	{
		name: 'demyst-final-project-home-blog'
	},
	{
		name: 'extra-flex-card'
	},
	{
		name: 'extra-grid-card'
	},
	{
		name: 'fun-with-transforms'
	},
	{
		name: 'hcn-redesign'
	},
	{
		name: 'mars-weather-app'
	},
	{
		name: 'mobile-first-for-the-win'
	},
	{
		name: 'navbar-change-on-scroll'
	},
	{
		name: 'popdog-card-clone'
	},
	{
		name: 'portfolio-with-css-grid'
	},
	{
		name: 'responsive-design-patterns'
	},
	{
		name: 'responsive-from-scratch'
	},
	{
		name: 'responsive-start-to-finish'
	},
	{
		name: 'scrimba-portfolio'
	},
	{
		name: 'shoes'
	},
	{
		name: 'slide-in-with-intersection-observer'
	},
	{
		name: 'style-stage'
	},
	{
		name: 'the-band'
	},
	{
		name: 'the-box'
	},
	{
		name: 'the-picture-element'
	},
	{
		name: 'todo-list-collab'
	},
];

const list = document.getElementById('list');

projects.forEach(({ name }, i) => {
	const listItem = document.createElement('li');

	listItem.innerHTML = `
		<a href="${name}/index.html">
			<img src="${name}/design/${name}.png" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>

		<div class="links-container">
			<a href="${name}/index.html" class="blue">
				<i class="fas fa-eye"></i>
			</a>
			<a href="https://github.com/gavin-crowley/reference-powell/tree/main/${name}" class="github">
				<i class="fab fa-github"></i>
			</a>
		</div>
	`;

	list.appendChild(listItem);
});

function formatProjectName(name) {
	return name
		.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}
