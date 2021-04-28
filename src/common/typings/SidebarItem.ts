import { Resources, TFuncKey } from 'react-i18next';

export interface SidebarItem {
  title: TFuncKey<'common', Resources>;
  link: string;
  exact?: boolean;
}
