"use client";

import { useState } from "react";
import Image from "next/image";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import ArticleIcon from "@mui/icons-material/Article";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BoltIcon from "@mui/icons-material/Bolt";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function AdminDashboard() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`min-h-screen flex overflow-hidden font-display transition-colors duration-300 ${
        isDark ? "bg-[#0a1a10] text-slate-100" : "bg-[#f4f7f5] text-slate-800"
      }`}
    >
      {/* Sidebar */}
      <aside
        className={`w-64 hidden md:flex flex-col transition-colors duration-300 ${
          isDark
            ? "bg-[#0f2419] border-r border-emerald-900/40"
            : "bg-white border-r border-slate-200/80 shadow-sm"
        }`}
      >
        {/* Logo */}
        <div className="p-6 flex items-center gap-3">
          <div className="size-10 bg-linear-to-br from-emerald-400 to-green-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/25">
            <FitnessCenterIcon fontSize="small" />
          </div>
          <div>
            <h1
              className={`text-lg font-bold leading-none tracking-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              FitLife.id
            </h1>
            <p
              className={`text-xs font-medium mt-0.5 ${
                isDark ? "text-emerald-400/70" : "text-slate-400"
              }`}
            >
              Admin Panel
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 space-y-1 mt-2">
          <p
            className={`text-[10px] font-bold uppercase tracking-widest px-3 mb-3 ${
              isDark ? "text-emerald-500/50" : "text-slate-400"
            }`}
          >
            Menu
          </p>
          <a
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
              isDark
                ? "bg-emerald-500/15 text-emerald-400 shadow-sm shadow-emerald-500/10"
                : "bg-emerald-50 text-emerald-700 shadow-sm shadow-emerald-100"
            }`}
            href="#"
          >
            <DashboardIcon fontSize="small" />
            <span>Dashboard</span>
          </a>
          <a
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              isDark
                ? "text-slate-400 hover:text-emerald-300 hover:bg-emerald-500/10"
                : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
            }`}
            href="#"
          >
            <RestaurantMenuIcon fontSize="small" />
            <span>Healthy Menu</span>
          </a>
          <a
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              isDark
                ? "text-slate-400 hover:text-emerald-300 hover:bg-emerald-500/10"
                : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
            }`}
            href="#"
          >
            <ArticleIcon fontSize="small" />
            <span>Articles</span>
          </a>
          <a
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              isDark
                ? "text-slate-400 hover:text-emerald-300 hover:bg-emerald-500/10"
                : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
            }`}
            href="#"
          >
            <GroupIcon fontSize="small" />
            <span>Users</span>
          </a>
        </nav>

        {/* Bottom Nav */}
        <div
          className={`p-3 border-t transition-colors duration-300 ${
            isDark ? "border-emerald-900/40" : "border-slate-100"
          }`}
        >
          <a
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              isDark
                ? "text-slate-400 hover:text-emerald-300 hover:bg-emerald-500/10"
                : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
            }`}
            href="#"
          >
            <SettingsIcon fontSize="small" />
            <span>Settings</span>
          </a>
          <a
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 mt-1 ${
              isDark
                ? "text-red-400 hover:bg-red-500/10"
                : "text-red-500 hover:bg-red-50"
            }`}
            href="#"
          >
            <LogoutIcon fontSize="small" />
            <span>Logout</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header
          className={`sticky top-0 z-10 flex items-center justify-between px-6 lg:px-8 py-4 backdrop-blur-xl border-b transition-colors duration-300 ${
            isDark
              ? "bg-[#0a1a10]/80 border-emerald-900/30"
              : "bg-white/70 border-slate-200/60"
          }`}
        >
          <div className="flex items-center gap-4">
            <h2
              className={`text-xl font-bold ${
                isDark ? "text-white" : "text-slate-800"
              }`}
            >
              Dashboard
            </h2>
            <div
              className={`hidden lg:flex items-center rounded-xl px-3 py-2 w-72 transition-colors duration-300 ${
                isDark
                  ? "bg-emerald-900/20 border border-emerald-800/30"
                  : "bg-slate-100/80 border border-slate-200/50"
              }`}
            >
              <SearchIcon
                className={isDark ? "text-emerald-500/50" : "text-slate-400"}
                fontSize="small"
              />
              <input
                className={`bg-transparent border-none focus:ring-0 text-sm w-full outline-none ml-2 placeholder:transition-colors ${
                  isDark
                    ? "text-slate-200 placeholder:text-emerald-600/40"
                    : "text-slate-700 placeholder:text-slate-400"
                }`}
                placeholder="Search data, users..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* Dark/Light Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                isDark
                  ? "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
                  : "bg-amber-50 text-amber-500 hover:bg-amber-100"
              }`}
            >
              {isDark ? (
                <LightModeIcon fontSize="small" />
              ) : (
                <DarkModeIcon fontSize="small" />
              )}
            </button>
            {/* Notifications */}
            <button
              className={`relative p-2.5 rounded-xl transition-all duration-300 ${
                isDark
                  ? "text-slate-400 hover:bg-emerald-500/10 hover:text-emerald-300"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              <NotificationsIcon fontSize="small" />
              <span className="absolute top-2 right-2 size-2 bg-red-500 border-2 border-white dark:border-[#0a1a10] rounded-full"></span>
            </button>
            {/* User */}
            <div
              className={`flex items-center gap-3 pl-3 ml-1 border-l transition-colors duration-300 ${
                isDark ? "border-emerald-900/40" : "border-slate-200"
              }`}
            >
              <div className="text-right hidden sm:block">
                <p
                  className={`text-sm font-bold leading-none ${
                    isDark ? "text-white" : "text-slate-800"
                  }`}
                >
                  Admin User
                </p>
                <p
                  className={`text-xs mt-0.5 ${
                    isDark ? "text-emerald-500/60" : "text-slate-400"
                  }`}
                >
                  Super Admin
                </p>
              </div>
              <div className="size-10 rounded-xl bg-slate-200 overflow-hidden ring-2 ring-emerald-500/30 shadow-md">
                <Image
                  className="size-full object-cover"
                  alt="Admin profile"
                  src="https://ui-avatars.com/api/?name=Admin+User&background=random"
                  width={40}
                  height={40}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div>
            <h1
              className={`text-2xl lg:text-3xl font-black tracking-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Welcome back, Admin 👋
            </h1>
            <p
              className={`mt-1 ${
                isDark ? "text-emerald-400/60" : "text-slate-500"
              }`}
            >
              Here&apos;s what&apos;s happening with FitLife.id today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Total Users */}
            <div
              className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 ${
                isDark
                  ? "bg-[#0f2419] border-emerald-900/30 hover:border-emerald-700/40 hover:shadow-lg hover:shadow-emerald-900/20"
                  : "bg-white border-slate-200/60 shadow-sm hover:shadow-lg hover:shadow-slate-200/50"
              }`}
            >
              <div className="flex justify-between items-start">
                <div
                  className={`p-2.5 rounded-xl ${
                    isDark ? "bg-emerald-500/10" : "bg-emerald-50"
                  }`}
                >
                  <GroupIcon
                    className={isDark ? "text-emerald-400" : "text-emerald-600"}
                    fontSize="small"
                  />
                </div>
                <span
                  className={`text-xs font-bold flex items-center gap-0.5 px-2 py-1 rounded-lg ${
                    isDark
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  <TrendingUpIcon sx={{ fontSize: 12 }} />
                  12.5%
                </span>
              </div>
              <div className="mt-4">
                <p
                  className={`text-sm font-medium ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Total Users
                </p>
                <h3
                  className={`text-2xl font-black mt-1 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  12,450
                </h3>
              </div>
            </div>

            {/* Active Users */}
            <div
              className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 ${
                isDark
                  ? "bg-[#0f2419] border-emerald-900/30 hover:border-blue-700/30 hover:shadow-lg hover:shadow-blue-900/10"
                  : "bg-white border-slate-200/60 shadow-sm hover:shadow-lg hover:shadow-slate-200/50"
              }`}
            >
              <div className="flex justify-between items-start">
                <div
                  className={`p-2.5 rounded-xl ${
                    isDark ? "bg-blue-500/10" : "bg-blue-50"
                  }`}
                >
                  <BoltIcon
                    className={isDark ? "text-blue-400" : "text-blue-600"}
                    fontSize="small"
                  />
                </div>
                <span
                  className={`text-xs font-bold flex items-center gap-0.5 px-2 py-1 rounded-lg ${
                    isDark
                      ? "bg-blue-500/10 text-blue-400"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  <TrendingUpIcon sx={{ fontSize: 12 }} />
                  5.2%
                </span>
              </div>
              <div className="mt-4">
                <p
                  className={`text-sm font-medium ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Active Users
                </p>
                <h3
                  className={`text-2xl font-black mt-1 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  3,210
                </h3>
              </div>
            </div>

            {/* Total Menus */}
            <div
              className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 ${
                isDark
                  ? "bg-[#0f2419] border-emerald-900/30 hover:border-orange-700/30 hover:shadow-lg hover:shadow-orange-900/10"
                  : "bg-white border-slate-200/60 shadow-sm hover:shadow-lg hover:shadow-slate-200/50"
              }`}
            >
              <div className="flex justify-between items-start">
                <div
                  className={`p-2.5 rounded-xl ${
                    isDark ? "bg-orange-500/10" : "bg-orange-50"
                  }`}
                >
                  <RestaurantIcon
                    className={isDark ? "text-orange-400" : "text-orange-600"}
                    fontSize="small"
                  />
                </div>
                <span
                  className={`text-xs font-bold flex items-center gap-0.5 px-2 py-1 rounded-lg ${
                    isDark
                      ? "bg-orange-500/10 text-orange-400"
                      : "bg-orange-50 text-orange-600"
                  }`}
                >
                  <TrendingUpIcon sx={{ fontSize: 12 }} />
                  2.1%
                </span>
              </div>
              <div className="mt-4">
                <p
                  className={`text-sm font-medium ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Total Menus
                </p>
                <h3
                  className={`text-2xl font-black mt-1 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  145
                </h3>
              </div>
            </div>

            {/* Total Articles */}
            <div
              className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 ${
                isDark
                  ? "bg-[#0f2419] border-emerald-900/30 hover:border-purple-700/30 hover:shadow-lg hover:shadow-purple-900/10"
                  : "bg-white border-slate-200/60 shadow-sm hover:shadow-lg hover:shadow-slate-200/50"
              }`}
            >
              <div className="flex justify-between items-start">
                <div
                  className={`p-2.5 rounded-xl ${
                    isDark ? "bg-purple-500/10" : "bg-purple-50"
                  }`}
                >
                  <ArticleIcon
                    className={isDark ? "text-purple-400" : "text-purple-600"}
                    fontSize="small"
                  />
                </div>
                <span
                  className={`text-xs font-bold flex items-center gap-0.5 px-2 py-1 rounded-lg ${
                    isDark
                      ? "bg-purple-500/10 text-purple-400"
                      : "bg-purple-50 text-purple-600"
                  }`}
                >
                  <TrendingUpIcon sx={{ fontSize: 12 }} />
                  8.4%
                </span>
              </div>
              <div className="mt-4">
                <p
                  className={`text-sm font-medium ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Total Articles
                </p>
                <h3
                  className={`text-2xl font-black mt-1 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  89
                </h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* Recent Menu Table */}
            <div
              className={`xl:col-span-2 rounded-2xl border overflow-hidden transition-colors duration-300 ${
                isDark
                  ? "bg-[#0f2419] border-emerald-900/30"
                  : "bg-white border-slate-200/60 shadow-sm"
              }`}
            >
              <div
                className={`p-5 lg:p-6 border-b flex justify-between items-center ${
                  isDark ? "border-emerald-900/30" : "border-slate-100"
                }`}
              >
                <h3
                  className={`text-lg font-bold ${
                    isDark ? "text-white" : "text-slate-800"
                  }`}
                >
                  Recent Healthy Menu
                </h3>
                <button
                  className={`text-sm font-bold transition-colors ${
                    isDark
                      ? "text-emerald-400 hover:text-emerald-300"
                      : "text-emerald-600 hover:text-emerald-700"
                  }`}
                >
                  View All
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr
                      className={
                        isDark ? "bg-emerald-900/10" : "bg-slate-50/80"
                      }
                    >
                      <th
                        className={`px-6 py-3.5 text-[11px] font-bold uppercase tracking-wider ${
                          isDark ? "text-emerald-500/50" : "text-slate-400"
                        }`}
                      >
                        Menu
                      </th>
                      <th
                        className={`px-6 py-3.5 text-[11px] font-bold uppercase tracking-wider ${
                          isDark ? "text-emerald-500/50" : "text-slate-400"
                        }`}
                      >
                        Category
                      </th>
                      <th
                        className={`px-6 py-3.5 text-[11px] font-bold uppercase tracking-wider ${
                          isDark ? "text-emerald-500/50" : "text-slate-400"
                        }`}
                      >
                        Price
                      </th>
                      <th
                        className={`px-6 py-3.5 text-[11px] font-bold uppercase tracking-wider ${
                          isDark ? "text-emerald-500/50" : "text-slate-400"
                        }`}
                      >
                        Status
                      </th>
                      <th
                        className={`px-6 py-3.5 text-[11px] font-bold uppercase tracking-wider text-right ${
                          isDark ? "text-emerald-500/50" : "text-slate-400"
                        }`}
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    className={`divide-y ${
                      isDark ? "divide-emerald-900/20" : "divide-slate-100"
                    }`}
                  >
                    {/* Row 1 */}
                    <tr
                      className={`transition-colors ${
                        isDark
                          ? "hover:bg-emerald-900/10"
                          : "hover:bg-slate-50/50"
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div
                            className={`size-10 rounded-xl overflow-hidden border ${
                              isDark
                                ? "border-emerald-800/30"
                                : "border-slate-200"
                            }`}
                          >
                            <Image
                              className="size-full object-cover"
                              alt="Salmon salad"
                              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&q=80"
                              width={40}
                              height={40}
                              unoptimized
                            />
                          </div>
                          <span
                            className={`text-sm font-bold ${
                              isDark ? "text-slate-200" : "text-slate-700"
                            }`}
                          >
                            Salmon Keto Bowl
                          </span>
                        </div>
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm ${
                          isDark ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        High Protein
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-bold ${
                          isDark ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        $12.50
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-lg ${
                            isDark
                              ? "bg-emerald-500/15 text-emerald-400"
                              : "bg-emerald-50 text-emerald-600"
                          }`}
                        >
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <button
                          className={`p-1 rounded-lg transition-colors ${
                            isDark
                              ? "text-slate-500 hover:text-emerald-400 hover:bg-emerald-500/10"
                              : "text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          <MoreHorizIcon fontSize="small" />
                        </button>
                      </td>
                    </tr>
                    {/* Row 2 */}
                    <tr
                      className={`transition-colors ${
                        isDark
                          ? "hover:bg-emerald-900/10"
                          : "hover:bg-slate-50/50"
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div
                            className={`size-10 rounded-xl overflow-hidden border ${
                              isDark
                                ? "border-emerald-800/30"
                                : "border-slate-200"
                            }`}
                          >
                            <Image
                              className="size-full object-cover"
                              alt="Garden salad"
                              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&q=80"
                              width={40}
                              height={40}
                              unoptimized
                            />
                          </div>
                          <span
                            className={`text-sm font-bold ${
                              isDark ? "text-slate-200" : "text-slate-700"
                            }`}
                          >
                            Garden Fresh Salad
                          </span>
                        </div>
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm ${
                          isDark ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        Vegan
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-bold ${
                          isDark ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        $9.00
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-lg ${
                            isDark
                              ? "bg-emerald-500/15 text-emerald-400"
                              : "bg-emerald-50 text-emerald-600"
                          }`}
                        >
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <button
                          className={`p-1 rounded-lg transition-colors ${
                            isDark
                              ? "text-slate-500 hover:text-emerald-400 hover:bg-emerald-500/10"
                              : "text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          <MoreHorizIcon fontSize="small" />
                        </button>
                      </td>
                    </tr>
                    {/* Row 3 */}
                    <tr
                      className={`transition-colors ${
                        isDark
                          ? "hover:bg-emerald-900/10"
                          : "hover:bg-slate-50/50"
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div
                            className={`size-10 rounded-xl overflow-hidden border ${
                              isDark
                                ? "border-emerald-800/30"
                                : "border-slate-200"
                            }`}
                          >
                            <Image
                              className="size-full object-cover"
                              alt="Smoothie"
                              src="https://images.unsplash.com/photo-1596435016259-25712c98d752?w=100&q=80"
                              width={40}
                              height={40}
                              unoptimized
                            />
                          </div>
                          <span
                            className={`text-sm font-bold ${
                              isDark ? "text-slate-200" : "text-slate-700"
                            }`}
                          >
                            Berry Smoothie Bowl
                          </span>
                        </div>
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm ${
                          isDark ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        Dessert
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-bold ${
                          isDark ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        $8.50
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-lg ${
                            isDark
                              ? "bg-slate-700/50 text-slate-400"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          Out of Stock
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <button
                          className={`p-1 rounded-lg transition-colors ${
                            isDark
                              ? "text-slate-500 hover:text-emerald-400 hover:bg-emerald-500/10"
                              : "text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          <MoreHorizIcon fontSize="small" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* New Users Widget */}
            <div
              className={`rounded-2xl border flex flex-col transition-colors duration-300 ${
                isDark
                  ? "bg-[#0f2419] border-emerald-900/30"
                  : "bg-white border-slate-200/60 shadow-sm"
              }`}
            >
              <div
                className={`p-5 lg:p-6 border-b flex justify-between items-center ${
                  isDark ? "border-emerald-900/30" : "border-slate-100"
                }`}
              >
                <h3
                  className={`text-lg font-bold ${
                    isDark ? "text-white" : "text-slate-800"
                  }`}
                >
                  New Sign-ups
                </h3>
                <span className="size-6 bg-gradient-to-br from-emerald-400 to-green-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-sm">
                  5
                </span>
              </div>
              <div className="p-5 lg:p-6 space-y-5 flex-1">
                {/* Sarah */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-slate-200 overflow-hidden ring-1 ring-emerald-500/20">
                      <Image
                        className="size-full object-cover"
                        alt="Sarah"
                        src="https://ui-avatars.com/api/?name=Sarah+Miller&background=random"
                        width={40}
                        height={40}
                        unoptimized
                      />
                    </div>
                    <div>
                      <p
                        className={`text-sm font-bold leading-none ${
                          isDark ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        Sarah Miller
                      </p>
                      <p
                        className={`text-xs mt-1 ${
                          isDark ? "text-slate-500" : "text-slate-400"
                        }`}
                      >
                        sarah.m@gmail.com
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-bold ${
                      isDark ? "text-emerald-600/50" : "text-slate-400"
                    }`}
                  >
                    2m ago
                  </span>
                </div>
                {/* David */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-slate-200 overflow-hidden ring-1 ring-emerald-500/20">
                      <Image
                        className="size-full object-cover"
                        alt="David"
                        src="https://ui-avatars.com/api/?name=David+Chen&background=random"
                        width={40}
                        height={40}
                        unoptimized
                      />
                    </div>
                    <div>
                      <p
                        className={`text-sm font-bold leading-none ${
                          isDark ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        David Chen
                      </p>
                      <p
                        className={`text-xs mt-1 ${
                          isDark ? "text-slate-500" : "text-slate-400"
                        }`}
                      >
                        d.chen@fitlife.id
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-bold ${
                      isDark ? "text-emerald-600/50" : "text-slate-400"
                    }`}
                  >
                    15m ago
                  </span>
                </div>
                {/* Elena */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-slate-200 overflow-hidden ring-1 ring-emerald-500/20">
                      <Image
                        className="size-full object-cover"
                        alt="Elena"
                        src="https://ui-avatars.com/api/?name=Elena+R&background=random"
                        width={40}
                        height={40}
                        unoptimized
                      />
                    </div>
                    <div>
                      <p
                        className={`text-sm font-bold leading-none ${
                          isDark ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        Elena Rodriguez
                      </p>
                      <p
                        className={`text-xs mt-1 ${
                          isDark ? "text-slate-500" : "text-slate-400"
                        }`}
                      >
                        elena.rod@outlook.com
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-bold ${
                      isDark ? "text-emerald-600/50" : "text-slate-400"
                    }`}
                  >
                    42m ago
                  </span>
                </div>
              </div>
              <div
                className={`p-4 border-t ${
                  isDark ? "border-emerald-900/30" : "border-slate-100"
                }`}
              >
                <button
                  className={`w-full py-2.5 text-sm font-bold rounded-xl transition-all duration-200 ${
                    isDark
                      ? "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  Manage All Users
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
