export const formatLocation = (oldLocation) => {
  const parts = oldLocation.split(",").map((part) => part.trim());
  return parts.length === 2 ? `${parts[1]}, ${parts[0]}` : oldLocation;
};
