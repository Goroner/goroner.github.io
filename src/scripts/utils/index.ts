export const formatDate = (date: Date) => {
    return date.toLocaleString('en-us', { month: 'short', year: 'numeric' });
}
