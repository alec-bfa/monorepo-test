import { UnwrapPromise } from './unwrapPromise';

export type staticPropsType<
  t extends () => Promise<{ props: Record<string, unknown> }>,
> = UnwrapPromise<ReturnType<t>>['props'];
