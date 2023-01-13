Oh-The-Places-We-Go

Background:
Have you ever wondered the impact of net migration on a country’s population? This visual will provide a thorough map representation of the % net migration vs total population by year of each country. There will be factor toggle switches for total population change, net migration’s impact, and natural migration change (live births/deaths) all provided by the UN population API. 
This will include a color style graphic per country to indicate growth/decline due to the factor chosen and a timeline in which you can see multiple years or year by year. It will pull the updated data per request for each click the user chooses. 
Future possibilities are layering in correlations to migration like GDP, eco-friendly/green score, # hospitals per capita, avg # paid vacation days per year. This would be a great future passion project to continue to build and layer for years to come. 

Functionality & MVPs:
In ‘Oh! The Places We Go,’ users will be able to:
•	Modal for about the page/data source and basic instructions on how to navigate
•	Top banner with name, and general navigation buttons, also a re-pop-up of bullet 1
•	Timeline with multi-check option to filter all visuals to a year or range
•	Side bar that updates with country selection with total ## data output
•	Map – 
  o	Interactive colors (red for decreasing, green for increasing by country shading)
  o	Zoomable
  o	Factor selectors (radio buttons for the 3 factors in this phase)
•	Bar Graph showing total population metrics for all countries
•	Upon click on either the map or bar graph all visuals update to select only that country information

Wireframe:
(./assets/images/wireframe.png)

Design Plan: 
(./assets/images/design.png)


Technologies, Libraries, APIs:
This project is implemented with the following technologies:
	The UN.org population API https://population.un.org/dataportal/about/dataapi#data-sources
	Canvas API
	D3 API library
	Webpack
	Npm
	Asana Project Manager Suite

Implementation Timeline:
Friday: Initial project setup, along with library and technology learning
Weekend: API familiarity and project setup
	interactive map on screen via D3 with colors
	Bar graph via D3
Monday: Add timeline/year selector and data readouts
	Create Modal
	Setup filter functions
Tuesday: Connectivity of filters to the visuals on screen
Wednesday: Improve display as needed
  Ensure smooth transitions with factor selectors
	Integration Tests
Thursday: Final testing and deploy to GitHub

Checklists:
Live Project
o	Includes links to your portfolio website, GitHub, and LinkedIn
o	Landing Page/modal with obvious, clear instructions
o	Interactivity of some kind
o	Well styled, clean frontend
o	If it has music, the option to mute or stop
Production README
o	Link to live version
o	Instructions on how to interact with the project
o	List of technologies/APIs/libraries used
o	Technical implementation details with (good-looking) code snippets
o	To-do’s / future features
o	No .DS_Store files / debuggers / console.logs
o	Organized file structure, with /src and /dist directories
