export function extractDate(dateStr) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Split the input string by '/' to extract year, month, and day
    const [year, month, day] = dateStr.split('/');

    // Convert month to corresponding short month name using the months array
    const shortMonth = months[parseInt(month) - 1];

    // Return the formatted date in "DD Mon" format
    return `${day} ${shortMonth}`;
}