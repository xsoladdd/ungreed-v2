export const decodeIds = (ids: string) => {
  const decodedIds = decodeURIComponent(ids as string);
  const idArray = decodedIds.split(",").map((id) => parseInt(id.trim()));
  return idArray;
};
