export default function getStudentIdsSum(list) {
  return list.reduce((a, obj) => a + obj.id, 0);
}
