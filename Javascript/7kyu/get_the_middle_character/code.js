function getMiddle(s)
{
  const len = s.length;
    const mid = Math.floor(len / 2);

    if (len % 2 === 0) {
        // For even length, return two middle characters
        return s.substring(mid - 1, mid + 1);
    } else {
        // For odd length, return the single middle character
        return s.charAt(mid);
    }
}