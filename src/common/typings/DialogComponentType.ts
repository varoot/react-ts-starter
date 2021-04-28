import { DialogProps } from '@material-ui/core/Dialog';
import { ComponentType, SyntheticEvent } from 'react';

export type DialogResolveFunc<T> = (value?: T | PromiseLike<T> | undefined) => void;

export interface DialogComponentProps<T> {
  onClose: (event: SyntheticEvent, reason?: 'backdropClick' | 'escapeKeyDown') => void;
  onExited: DialogProps['onExited'];
  onResolve: DialogResolveFunc<T>;
  open: boolean;
}

export type DialogComponentType<T, P> = ComponentType<DialogComponentProps<T> & P>;

export type DialogComponentExtraProps<C> = C extends ComponentType<DialogComponentProps<infer T> & infer P>
  ? Omit<P, keyof DialogComponentProps<T>>
  : never;

export type DialogComponentExtraPropKeys<C> = C extends ComponentType<DialogComponentProps<infer T> & infer P>
  ? Exclude<keyof P, keyof DialogComponentProps<T>>
  : never;

export type DialogComponentResolveType<C> = C extends ComponentType<DialogComponentProps<infer T>> ? T : never;
