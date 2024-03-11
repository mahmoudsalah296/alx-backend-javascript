export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) return 0;
  return students.reduce((acc, curr) => acc + curr.id, 0);
}
