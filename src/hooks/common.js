import { USERS, EXAMLIST } from '../constants';
export const getUser = (userId) => {
  if (typeof userId === 'string' || userId === 'number')
    return USERS.find((user) => user.id === userId);
};
export const getExam = (examId) => {
  return EXAMLIST.find((exam) => exam.id === examId);
};
