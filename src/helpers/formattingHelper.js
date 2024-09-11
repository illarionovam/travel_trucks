export const formatLocation = (oldLocation) => {
  const parts = oldLocation.split(",").map((part) => part.trim());
  return parts.length === 2 ? `${parts[1]}, ${parts[0]}` : oldLocation;
};

export const truncateDescription = (oldDescription) => {
  const maxLength = 62;

  return oldDescription.length > maxLength
    ? oldDescription.slice(0, maxLength) + "..."
    : oldDescription;
};

export const capitalizeString = (str) => {
  if (!str || str === "AC" || str === "TV") return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
