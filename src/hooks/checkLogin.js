export function checkLogin(users) {
  const userId = JSON.parse(localStorage.getItem('userId'));
  if (!userId) return null;
  const isUser = users.some((user) => {
    return user.id === userId;
  });
  if (isUser) {
    return userId;
  } else {
    return null;
  }
}
