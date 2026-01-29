export const getAssetUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('//')) return path;
  
  // Clean up path to ensure no leading slash or dot-slash
  let cleanPath = path;
  if (cleanPath.startsWith('./')) cleanPath = cleanPath.slice(2);
  if (cleanPath.startsWith('/')) cleanPath = cleanPath.slice(1);
  
  let base = import.meta.env.BASE_URL;
  
  // Fallback/Safety: If base is default '/' but we are likely on the subpath (based on repo name context),
  // we might want to force it. However, relying on the config is best.
  // Given the issue reported, we will ensure base has the project root if it seems missing.
  // But hardcoding is risky if they ever move it.
  // Let's stick to the config variable but ensure we handle the joining correctly.
  
  // Ensure base ends with slash
  if (!base.endsWith('/')) base += '/';
  
  return `${base}${cleanPath}`;
};
