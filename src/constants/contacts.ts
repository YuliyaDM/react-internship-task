import IContact from '../interfaces/IContact.interface'

const CONTACTS: IContact[] = [
	{
		title: 'Contact details',
		type: 'text',
		elements: [
			{
				title: '+380 (98) 89 57 367'
			}
		]
	},
	{
		title: 'Socials',
		type: 'links',
		elements: [
			{
			  title: 'Twitter',
			  color: 'blue',
			  link: 'https://twitter.com/JuliaPirogova3'
			},
			{
			  title: 'Github',
			  color: 'gray',
			  link: 'https://github.com/YuliyaDM'
			},
			{
			  title: 'LinkedIn',
			  color: 'orange',
			  link: 'https://www.linkedin.com/in/yuliya-pirogova-99880b245/'
			},
			{
			  title: 'Monkeytype',
			  color: 'green',
			  link: 'https://monkeytype.com/profile/Lijua'
			}
		]
	},
	{
		title: 'Location',
		type: 'text',
		elements: [
			{
				title: 'Ukraine'
			}
		]
	}
]

export default CONTACTS
