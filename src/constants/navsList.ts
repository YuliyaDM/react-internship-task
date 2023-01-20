import INav from '../interfaces/INav.interfaces'

const NAVS_LIST: INav[] = [
  { title: 'ABOUT', scrollTo: 'about', type: 'scrollTo' },
  { title: 'WORKS', scrollTo: 'works', type: 'scrollTo' },
  { title: 'CONTACTS', scrollTo: 'contacts', type: 'scrollTo' },
  { title: 'HIRE ME', link: 'mailto:juliapirogova03@gmail.com', type: 'link' }
]

export default NAVS_LIST
