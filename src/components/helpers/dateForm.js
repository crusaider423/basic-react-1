import { formatDistanceToNow, format } from 'date-fns';

export function date(arg) {
  return formatDistanceToNow(new Date(arg), { addSuffix: true });
}

export function dateFormat(args) {
  return format(new Date(args), 'Pp'); //=> '6. listopad'
}
