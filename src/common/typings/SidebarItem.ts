import { TFuncKey } from 'react-i18next';

export interface SidebarItem {
  title: TFuncKey<'common'>;
  link: string;
  exact?: boolean;
}
