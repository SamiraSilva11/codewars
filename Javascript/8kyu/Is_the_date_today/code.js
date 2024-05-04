function isToday(date) {
    const today = new Date();
    return (
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate()
    );
}

//best practice
function isToday(date) {
    return new Date().toDateString() === date.toDateString();
  }