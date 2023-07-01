import {
	mobile,
	backend,
	web,
	javascript,
	html,
	css,
	reactjs,
	tailwind,
	nodejs,
	git,
	threejs,
	suitcase,
	brightchamps,
	php,
	mysql,
	csharp,
	xd,
	python,
	cis,
	daherfoundation,
	blogify,
	wooxtravel,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "Python Developer",
		icon: backend,
	},
	{
		title: "Coding Instructor",
		icon: mobile,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "PHP",
		icon: php,
	},
	{
		name: "MySQL",
		icon: mysql,
	},
	{
		name: "Python",
		icon: python,
	},
	{
		name: "C#",
		icon: csharp,
	},
	// {
	// 	name: "Flutter",
	// 	icon: flutter,
	// },
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "AdobeXD",
		icon: xd,
	},
];

const experiences = [
	{
		title: "Python Developer",
		company_name: "Freelance",
		icon: suitcase,
		iconBg: "#E6DEDD",
		date: "April 2022 - November 2022",
		points: [
			"Developed a virtual assistant using Python that could perform simple tasks such as opening YouTube, Google Chrome, Gmail, Stackoverflow, and searching Wikipedia, as well as providing weather forecasts for different cities, finding any location, and writing notes.",
			"Integrated APIs such as Google Maps and OpenWeatherMap to provide the location and weather-related functionality in the virtual assistant.",
			"Integrated the GPT-3 API into the virtual assistant in a later version to improve its conversational abilities and enable it to perform more complex tasks.",
			"Implemented voice recognition and text-to-speech functionality using Python libraries such as SpeechRecognition and pyttsx3 to enable users to interact with the virtual assistant through voice commands. ",
		],
	},
	{
		title: "Web Developer",
		company_name: "Freelance",
		icon: suitcase,
		iconBg: "#383E56",
		date: "December 2022 - January 2023",
		points: [
			"Developed a full stack blog website using HTML, CSS, JavaScript, PHP, and MySQL to allow users to create, edit, and view blog posts and comments. ",
			"Developed a back-end travel website using PHP and MySQL to manage and display travel destinations and related information.",
			"Designed and developed a responsive user interface using HTML, CSS, and JavaScript to provide an optimal user experience across different devices. ",
			"Implemented user authentication and authorization functionalities to restrict access to the admin panel.",
			"Ensured data security by sanitizing user input, utilizing parameterized queries, and implementing appropriate data validation and error handling mechanisms.",
			"Created dynamic pages to display contents using PHP and retrieved data from the MySQL database based on user queries or predefined filters.",
		],
	},
	{
		title: "Coding Instructor",
		company_name: "Brightchamps Academy",
		icon: brightchamps,
		iconBg: "#fff",
		date: "Jan 2023 - Present",
		points: [
			"Conducted classes for students of different age groups, including little, junior, and senior levels, teaching them programming concepts and languages such as Scratch, Thunkable, HTML, CSS, and Python.",
			"Provided individualized instruction and support to students who were struggling with programming concepts or assignments.",
			"Facilitated hands-on learning activities and projects to reinforce programming concepts and encourage creativity and problem-solving skills.",
			"Conducted assessments and provided feedback to students to help them understand their progress and identify areas for improvement.",
			"Participated in parent-teacher meetings and provided progress reports to parents to keep them informed about their child's performance in the class.",
		],
	},
];

const courses = [
	{
		course_name: "Web & Mobile Development",
		details:
			"Full-Stack Web Development using HTML, CSS, JavaScript, PHP, and MySQL. In addition to Mobile App Development using Flutter.",
		company: "CIS College",
		date: "July 1, 2022 - December 30, 2022",
		image: cis,
	},
	{
		course_name: "Programming Course",
		details:
			"Python Programming course includes OOP, and .NET Framework with C# for Windows App Development.",
		company: "CIS College",
		date: "July 1, 2022 - December 30, 2022",
		image: cis,
	},
	{
		course_name: "Cybersecurity Program",
		details:
			"12 courses about cybersecurity at Coursera platform includes Access Control, Cloud Computing Security, and so on.",
		company: "Michel Daher Foundation",
		date: "December 1, 2022 - February 11, 2023",
		image: daherfoundation,
	},
];

const projects = [
	{
		name: "Blogify",
		description:
			"Blog website with an admin panel that allows you to create, manage, and control your blog posts and users.",
		tags: [
			{
				name: "HTML/CSS",
				color: "blue-text-gradient",
			},
			{
				name: "JavaScript",
				color: "green-text-gradient",
			},
			{
				name: "PHP",
				color: "pink-text-gradient",
			},
			{
				name: "MySQL",
				color: "white-text-gradient",
			},
		],
		image: blogify,
		source_code_link: "https://github.com/wahabtlais/blogify.git",
		demo_project_link: "https://blogifyw.netlify.app",
	},
	{
		name: "WooxTravel",
		description:
			"This website is designed to help you explore various countries and cities, and book flights conveniently.",
		tags: [
			{
				name: "HTML/CSS",
				color: "blue-text-gradient",
			},
			{
				name: "JavaScript",
				color: "green-text-gradient",
			},
			{
				name: "PHP",
				color: "pink-text-gradient",
			},
			{
				name: "MySQL",
				color: "white-text-gradient",
			},
		],
		image: wooxtravel,
		source_code_link: "https://github.com/wahabtlais/WooxTravel.git",
		demo_project_link: "https://wooxtravel.netlify.app",
	},
];

export { services, technologies, experiences, courses, projects };
