interface INavGeneralArgs {
	title: string,
}

type INavScrollTo = {
	type: 'scrollTo',
	scrollTo: string,	
} & INavGeneralArgs

type INavLink = {
	type: 'link',
	link: string,
} & INavGeneralArgs

type INav = INavLink | INavScrollTo

export default INav
