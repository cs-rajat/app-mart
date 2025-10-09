import React, { useEffect, useState } from "react";
import {
  getInstalledProducts,
  uninstallProduct,
} from "../utils/localStorageUtils";
import { Link } from "react-router-dom";

const InstalledApps = () => {
  const [installed, setInstalled] = useState([]);
  const [sortAsc, setSortAsc] = useState(true); 

  const loadInstalled = () => {
    const apps = getInstalledProducts();
    setInstalled(apps);
  };

  useEffect(() => {
    loadInstalled();
  }, []);

  const handleUninstall = (id) => {
    uninstallProduct(id);
    loadInstalled();
  };

 
  const handleSortBySize = () => {
    const sorted = [...installed].sort((a, b) => {
      const sizeA = parseFloat(a.size) || 0;
      const sizeB = parseFloat(b.size) || 0;
      return sortAsc ? sizeA - sizeB : sizeB - sizeA;
    });
    setInstalled(sorted);
    setSortAsc(!sortAsc); // toggle direction
  };

  if (installed.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No installed apps yet.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-6 space-y-4">
      <h2 className="text-2xl font-bold mb-6">Installed Apps</h2>

      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold">
          <span>{installed.length}</span> App Found
        </h1>
        <button
          onClick={handleSortBySize}
          className="btn  text-sm transition"
        >
          Sort by Size {sortAsc ? "↑" : "↓"}
        </button>
      </div>

      {installed.map((app) => (
        <div
          key={app.id}
          className="flex justify-between items-center bg-white p-4 rounded-xl shadow hover:shadow-md transition"
        >
          <div className="flex items-center gap-4">
            <img
              src={app.image}
              alt={app.title}
              className="w-12 h-12 rounded-md bg-gray-100"
            />
            <div>
              <h3 className="font-semibold">{app.title}</h3>
              <p className="text-sm text-gray-500">{app.size} MB</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to={`/product/${app.id}`}
              className="text-blue-600 hover:underline text-sm"
            >
              Details
            </Link>
            <button
              onClick={() => handleUninstall(app.id)}
              className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded"
            >
              Uninstall
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstalledApps;
