import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { Download, Star, MessageSquare } from "lucide-react";
import { isProductInstalled, installProduct } from "../utils/localStorageUtils";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import imgEr from "../assets/App-Error.png";
import Spinner from "../Components/Spinner";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading: productsLoading } = useProducts(); // Assuming your hook has loading state
  const [isInstalled, setIsInstalled] = useState(false);

  const [loading, setLoading] = useState(true); // Local loading state for this page
  const [app, setApp] = useState(null);

  useEffect(() => {
    if (!productsLoading) {
      const foundApp = products.find((p) => p.id.toString() === id);
      setApp(foundApp);
      if (foundApp) setIsInstalled(isProductInstalled(foundApp.id));
      setLoading(false);
    }
  }, [products, productsLoading, id]);

  const handleInstall = () => {
    installProduct(app);
    setIsInstalled(true);
    toast.success(`${app.title} installed successfully! 🎉`, {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Spinner />
      </div>
    );
  }

  if (!app) {
    return (
      <div className="flex justify-center items-center py-20">
        <img src={imgEr} alt="App not found" />
      </div>
    );
  }

  const ratingData = [...app.ratings]
    .sort((a, b) => parseInt(b.name) - parseInt(a.name))
    .map((r) => ({
      name: r.name,
      count: r.count,
    }));

  return (
    <div className="md:max-w-11/12 mx-auto py-12 px-6">
      <ToastContainer />

      <div className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <img
            src={app.image}
            alt={app.title}
            className="w-28 h-28 rounded-2xl bg-gray-50 p-3 shadow"
          />
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold">{app.title}</h2>
            <p className="text-sm text-gray-500 mb-4">
              Developed by{" "}
              <span className="text-indigo-600 font-medium">{app.companyName}</span>
            </p>

            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-gray-700">
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-bold">{(app.downloads / 1000000).toFixed(1)}M</p>
                  <p className="text-xs text-gray-500">Downloads</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <div>
                  <p className="font-bold">{app.ratingAvg}</p>
                  <p className="text-xs text-gray-500">Avg Rating</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-500" />
                <div>
                  <p className="font-bold">{(app.reviews / 1000).toFixed(0)}K</p>
                  <p className="text-xs text-gray-500">Reviews</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className={`mt-6 text-white text-sm px-5 py-2 rounded-lg shadow ${
                isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
            </button>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-md font-semibold mb-3">Ratings Overview</h3>
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="w-full h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={ratingData}
                  layout="vertical"
                  margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
                >
                  <XAxis
                    type="number"
                    domain={[0, Math.max(...ratingData.map((r) => r.count))]}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                  />
                  <YAxis
                    dataKey="name"
                    type="category"
                    axisLine={false}
                    tickLine={false}
                    width={60}
                    tick={{ fill: "#374151", fontSize: 12 }}
                  />
                  <Tooltip
                    cursor={{ fill: "rgba(249, 115, 22, 0.1)" }}
                    formatter={(value) => [`${value.toLocaleString()} users`, "Ratings"]}
                    labelFormatter={(label) => `${label}`}
                  />
                  <Bar dataKey="count" fill="#ff9900" barSize={22} radius={[0, 5, 5, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <h1 className="font-bold mb-2">Description</h1>
        <p className="text-gray-700 text-sm leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
