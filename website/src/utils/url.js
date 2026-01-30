export const getAssetUrl = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  
  // Clean up path: remove leading ./ or /
  const cleanPath = path.replace(/^(\.\/|\/)/, '');
  
  // Combine base and path, ensuring exactly one slash between them
  const combined = `${base.replace(/\/$/, '')}/${cleanPath}`;
  
  // Final safety: ensure we don't have double slashes (except protocol if any)
  return combined.replace(/([^:]\/)\/+/g, "$1");
};