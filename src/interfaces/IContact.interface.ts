interface IContactGeneral {
	title: string,
}

export interface IContactTextElements extends IContactGeneral { }

export interface IContactLinkElements extends IContactGeneral {
	link: string
	color: string,
}

export interface IContactLink extends IContactGeneral {
	type: 'links',
	elements: IContactLinkElements[]
}

export interface IContactText extends IContactGeneral {
	type: 'text'
	elements: IContactTextElements[]
}

type IContact = IContactLink | IContactText

export default IContact
