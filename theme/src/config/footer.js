import {
	githubIcon,
	instagramIcon,
} from '../icons/icons';

export const footerSocials = [
	// TODO: LinkedIn
	{
		url: 'https://www.instagram.com/baaxxtr/',
		icon: instagramIcon,
	},
	{
		url: 'https://github.com/explaura',
		icon: githubIcon,
	},
];

export const footerLists = [
	{
		title: 'Landing Pages',
		items: [
			{
				title: 'Landing Page 1',
				slug: '/landing-pages/landing-1',
			},
			{
				title: 'Landing Page 2',
				slug: '/landing-pages/landing-2',
			},
		],
	},
	{
		title: 'Company',
		items: [
			{
				title: 'About',
				slug: '/company/about',
			},
			{
				title: 'Blog',
				slug: '/blog',
			},
			{
				title: 'Contact',
				slug: '/company/contact',
			},
		],
	},
	{
		title: 'Theme',
		items: [
			{
				title: 'Get Started',
				slug: '/theme/get-started',
			},
			{
				title: 'Style Guide',
				slug: '/theme/style-guide',
			},
		],
	},
];
