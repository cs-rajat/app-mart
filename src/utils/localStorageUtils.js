const STORAGE_KEY = "installedProducts";

export const getInstalledProducts = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
};

export const isProductInstalled = (id) => {
  const installed = getInstalledProducts();
  return installed.some((p) => p.id === id);
};

export const installProduct = (product) => {
  const installed = getInstalledProducts();

  if (!installed.some((p) => p.id === product.id)) {
    installed.push(product);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(installed));
  }
};

export const uninstallProduct = (id) => {
  const installed = getInstalledProducts().filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(installed));
};
