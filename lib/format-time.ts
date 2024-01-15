export function formatTime(time: string) {
  // Parse the input time string
  const [h, m] = time.split(':');

  const hours = Number(h);
  const minutes = Number(m);

  // Convert hours to 12-hour format
  const formattedHours = hours % 12 || 12;

  // Determine whether it's AM or PM
  const period = hours >= 12 ? 'PM' : 'AM';

  // Create the formatted time string
  const formattedTime =
    minutes > 0 ? `${formattedHours}:${minutes} ${period}` : `${formattedHours} ${period}`;

  return formattedTime;
}
