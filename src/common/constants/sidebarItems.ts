import { SidebarItem } from '../typings';
import routes from './routes';

const sidebarItems: SidebarItem[] = [
  {
    title: 'sidebar.home',
    link: routes.home,
    exact: true,
  },
  {
    title: 'sidebar.routingDemo',
    link: routes.routingDemo,
  },
];

export default sidebarItems;
