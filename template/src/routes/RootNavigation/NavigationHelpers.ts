import {
  NavigationContainerRef,
  createNavigationContainerRef,
} from '@react-navigation/native';
import React from 'react';
import {RootStackParamList} from './RootNavigation.types';

export const navigationRef: React.RefObject<
  NavigationContainerRef<RootStackParamList>
> = createNavigationContainerRef();

export const routeNameRef: any = React.createRef();
export function goBack(): void {
  navigationRef.current?.goBack();
}
