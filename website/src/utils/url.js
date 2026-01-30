export const getAssetUrl = (path) => {
  const base = import.meta.env.BASE_URL;
  // Ensure base ends with / and path doesn't start with /
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('./') ? path.slice(2) : (path.startsWith('/') ? path.slice(1) : path);
  return `${cleanBase}${cleanPath}`;
};
