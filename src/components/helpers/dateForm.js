import { formatDistanceToNow } from 'date-fns';

export function date(arg) {
  return formatDistanceToNow(new Date(arg), { addSuffix: true });
}
