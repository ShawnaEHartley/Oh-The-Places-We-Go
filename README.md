<h1>Oh! The Places We Go</>

<h3>Background:</h3>
<p>
Have you ever wondered the impact of net migration on a country’s population? This visual will provide a thorough map representation of the % net migration vs total population by year of each country. There will be factor toggle switches for total population change, net migration’s impact, and natural migration change (live births/deaths) all provided by the UN population API. 
</p>
<p>
This will include a color style graphic per country to indicate growth/decline due to the factor chosen and a timeline in which you can see multiple years or year by year. It will pull the updated data per request for each click the user chooses. 
</p>
<p>
Future possibilities are layering in correlations to migration like GDP, eco-friendly/green score, # hospitals per capita, avg # paid vacation days per year. This would be a great future passion project to continue to build and layer for years to come. 
</p>
</br>
<h3>Functionality & MVPs:</h3>
<p>
In ‘Oh! The Places We Go,’ users will be able to:
	<ul>
<li>Modal for about the page/data source and basic instructions on how to navigate</li>
		<li>Top banner with name, and general navigation buttons, also a re-pop-up of bullet 1</li>
<li>Timeline with multi-check option to filter all visuals to a year or range</li>
<li>Side bar that updates with country selection with total ## data output</li>
<li>Map – Interactive colors (red for decreasing, green for increasing by country shading)</li>
<li>Map – Zoomable</li>
<li>Map - Factor selectors (radio buttons for the 3 factors in this phase)</li>
<li>Bar Graph showing total population metrics for all countries</li>
<li>Upon click on either the map or bar graph all visuals update to select only that country information</li>
		</ul>
		</p>
</br>
<h3>Wireframe:</h3>
<p>(./assets/images/wireframe.png)</p>

<h3>Design Plan: </h3>
<p>(./assets/images/design.png)</p>

</br>
<h3>Technologies, Libraries, APIs:</h3>
<p>This project is implemented with the following technologies:
	<ul>
<li>The UN.org population API </li> <p>https://population.un.org/dataportal/about/dataapi#data-sources</p>
<li>Canvas API</li>
<li>D3 API library</li>
<li>Webpack</li>
<li>Npm</li>
<li>Asana Project Manager Suite</li> <p>https://app.asana.com/0/1203716781295644/board</p>
		</ul>
		</p>
</br>
<h3>Implementation Timeline:</h3>
<p>
<h4>Friday:</h4>
	<li>Initial project setup, along with library and technology learning</li>
<h4>Weekend: </h4>
	<li>API familiarity and project setup</li>
	<li>interactive map on screen via D3 with colors</li>
	<li>Bar graph via D3</li>
<h4>Monday: </h4>
	<li>Add timeline/year selector and data readouts</li>
	<li>Create Modal</li>
	<li>Setup filter functions</li>
<h4>Tuesday: </h4>
	<li>Connectivity of filters to the visuals on screen</li>
<h4>Wednesday: </h4>
	<li>Improve display as needed</li>
	<li>Ensure smooth transitions with factor selectors</li>
	<li>Integration Tests</li>
<h4>Thursday: </h4>
	<li>Final testing and deploy to GitHub</li
</p>

</br>
<h3>Checklists:</h3>
<h4>Live Project</h4>
	<li>Includes links to your portfolio website, GitHub, and LinkedIn</li>
	<li>Landing Page/modal with obvious, clear instructions</li>
	<li>Interactivity of some kind</li>
	<li>Well styled, clean frontend</li>
	<li>If it has music, the option to mute or stop</li>
<h4>Production README</h4>
	<li>Link to live version</li>
	<li>Instructions on how to interact with the project</li>
	<li>List of technologies/APIs/libraries used</li>
	<li>Technical implementation details with (good-looking) code snippets</li>
	<li>To-do’s / future features</li>
	<li>No .DS_Store files / debuggers / console.logs</li>
	<li>Organized file structure, with /src and /dist directories</li>
