import React, { useEffect, useState } from "react";
import {
  getInstalledProducts,
  uninstallProduct,
} from "../utils/localStorageUtils";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import imgEr from "../assets/App-Error.png";
import Spinner from "../Components/Spinner";
import { Download, Star, HardDrive } from "lucide-react"; // ✅ icons

const MyInstallation = () => {
  const [installed, setInstalled] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);
  const [loading, setLoading] = useState(true);

  const loadInstalled = () => {
    setLoading(true);
    setTimeout(() => {
      const apps = getInstalledProducts();
      setInstalled(apps);
      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    loadInstalled();
  }, []);

  const handleUninstall = (app) => {
    uninstallProduct(app.id);
    toast.success(`${app.title} uninstalled successfully! 🎉`, {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
    loadInstalled();
  };

  // ✅ Format downloads (e.g., 1.2M or 800K)
  const formatDownloads = (count) => {
    if (!count) return "0";
    const num = parseInt(count);
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num.toString();
  };

  const handleSortByDownloads = () => {
    const sorted = [...installed].sort((a, b) => {
      const countA = parseInt(a.downloads) || 0;
      const countB = parseInt(b.downloads) || 0;
      return sortAsc ? countA - countB : countB - countA;
    });
    setInstalled(sorted);
    setSortAsc(!sortAsc);
  };

  return (
    <>
      <ToastContainer />

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Spinner />
        </div>
      ) : installed.length === 0 ? (
        <div className="flex flex-col justify-center items-center py-10 gap-3">
          <img src={imgEr} alt="No apps installed" />
          <Link to="/products" className="btn btn-primary">
            Browse Apps
          </Link>
        </div>
      ) : (
        <div className="md:max-w-11/12 mx-auto py-12 px-6 space-y-4">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Installed Apps
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Explore All Trending Apps on the Market developed by us
          </p>

          <div className="flex justify-between items-center mb-4">
            <h1 className="font-bold">
              <span>{installed.length}</span> App
              {installed.length > 1 ? "s" : ""} Found
            </h1>
            <button
              onClick={handleSortByDownloads}
              className="btn text-sm transition hover:bg-gray-200"
            >
              Sort by Downloads {sortAsc ? "↑" : "↓"}
            </button>
          </div>

          {installed.map((app) => (
            <div
              key={app.id}
              className="flex justify-between items-center bg-white p-4 rounded-xl shadow hover:shadow-md transition transform hover:scale-[1.01]"
            >
              {/* Left side */}
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-12 h-12 rounded-md bg-gray-100"
                />
                <div>
                  <h3 className="font-semibold text-lg">{app.title}</h3>

                  {/* Info row */}
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                    {/* Downloads */}
                    <div className="flex items-center gap-1">
                      <Download size={16} className="text-blue-500" />
                      <span>{formatDownloads(app.downloads)}</span>
                    </div>

                    {/* Rating */}
                    {app.ratingAvg && (
                      <div className="flex items-center gap-1">
                        <Star
                          size={16}
                          className="text-yellow-400 fill-yellow-400"
                        />
                        <span>{app.ratingAvg.toFixed(1)}</span>
                      </div>
                    )}

                    {/* Size */}
                    {app.size && (
                      <div className="flex items-center gap-1">
                        <HardDrive size={16} className="text-gray-500" />
                        <span>{app.size} MB</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right side buttons */}
              <div className="flex items-center gap-4">
                <Link
                  to={`/product/${app.id}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Details
                </Link>
                <button
                  onClick={() => handleUninstall(app)}
                  className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MyInstallation;
