"use client";

import React, {useState, useEffect} from "react";
import { Users, GraduationCap, TrendingUp, AlertTriangle } from "lucide-react" 

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import StatCard from "@/components/dashboard/StatCard";
import SiswaChart from "@/components/dashboard/SiswaChart";
import GenderRatioChart from "@/components/dashboard/GenderRatioChart";
import TrenPelanggaran from "@/components/dashboard/TrenPelanggaran";
import TipePelanggaran from "@/components/dashboard/TipePelanggaran";
import SeverityDistributionList from "@/components/dashboard/TingkatPelanggaran";
import TopViolatorsList from "@/components/dashboard/TopPelanggaran";
import BirthYearDistribution from "@/components/dashboard/BirthYearDistribution";

import { DataTahunLahir, DataBar, DataPie, ViolationStats} from "@/types";
interface StatCardProps {
  title: string;
  value: number;
  icon: React.ElementType;
  color: string;
  subtitle?: string;
  badge?: string;
}

export default function Dashboard() {
  const [totalSiswa, setTotalSiswa] = useState(0);
  const [totalKelas, setTotalKelas] = useState(0);
  const [barData, setBarData] = useState<DataBar[]>([]);
  const [pieData, setPieData] = useState<DataPie[]>([]);
  const [violationStats, setViolationStats] = useState<ViolationStats>({
    totalViolations: 0,
    monthlyViolations: [],
    violationTypes: [],
    severityDistribution: [],
    topViolators: [],
  });
  const [birthYearData, setBirthYearData] = useState<DataTahunLahir[]>([]);

  useEffect(() => {
    const dummyData = {
      totalSiswa: 1247,
      totalKelas: 36,
      barData: [
        { nama_kelas: "X-1", "Laki-Laki": 18, "Perempuan": 17 },
        { nama_kelas: "X-2", "Laki-Laki": 16, "Perempuan": 19 },
        { nama_kelas: "X-3", "Laki-Laki": 20, "Perempuan": 15 },
        { nama_kelas: "XI-1", "Laki-Laki": 17, "Perempuan": 18 },
        { nama_kelas: "XI-2", "Laki-Laki": 19, "Perempuan": 16 },
        { nama_kelas: "XI-3", "Laki-Laki": 15, "Perempuan": 20 },
        { nama_kelas: "XII-1", "Laki-Laki": 21, "Perempuan": 14 },
        { nama_kelas: "XII-2", "Laki-Laki": 16, "Perempuan": 19 },
        { nama_kelas: "XII-3", "Laki-Laki": 18, "Perempuan": 17 },
      ],
      pieData: [
        { name: "Laki-Laki", value: 623 },
        { name: "Perempuan", value: 624 },
      ],
      birthYearData: [
        { year: 2007, count: 387 },
        { year: 2008, count: 421 },
        { year: 2009, count: 312 },
        { year: 2010, count: 127 },
      ],
      violationStats: {
        totalViolations: 243,
        monthlyViolations: [
          { month: "Mei", violations: 45, resolved: 38 },
          { month: "Jun", violations: 52, resolved: 48 },
          { month: "Jul", violations: 38, resolved: 35 },
          { month: "Agu", violations: 61, resolved: 52 },
          { month: "Sep", violations: 47, resolved: 43 },
          { month: "Okt", violations: 43, resolved: 39 },
        ],
        violationTypes: [
          { id: 1, type: "Terlambat", count: 67, percentage: 27.6 },
          { id: 2, type: "Tidak Berseragam", count: 51, percentage: 21.0 },
          { id: 3, type: "Tidak Mengerjakan Tugas", count: 43, percentage: 17.7 },
          { id: 4, type: "Keluar Tanpa Izin", count: 38, percentage: 15.6 },
          { id: 5, type: "Merokok", count: 24, percentage: 9.9 },
          { id: 6, type: "Berkelahi", count: 12, percentage: 4.9 },
          { id: 7, type: "Lainnya", count: 8, percentage: 3.3},
        ],
        severityDistribution: [
          { severity: "Ringan", count: 142, color: "#10b981" },
          { severity: "Sedang", count: 78, color: "#f59e0b" },
          { severity: "Berat", count: 23, color: "#ef4444" },
        ],
        topViolators: [
          { name: "Ahmad Fauzi", violations: 12 },
          { name: "Budi Santoso", violations: 9 },
          { name: "Citra Dewi", violations: 8 },
          { name: "Deni Pratama", violations: 7 },
          { name: "Eka Putri", violations: 6 },
        ],
      },
    };
    setTotalSiswa(dummyData.totalSiswa);
    setTotalKelas(dummyData.totalKelas);
    setBarData(dummyData.barData);
    setPieData(dummyData.pieData);
    setBirthYearData(dummyData.birthYearData);
    setViolationStats(dummyData.violationStats);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Dashboard Siswa</h1>
      
        {/* Statistic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Siswa" value={totalSiswa} icon={Users} color="bg-blue-500" subtitle="Siswa Aktif" />
          <StatCard title="Kelas" value={totalKelas} icon={GraduationCap} color="bg-green-500" subtitle="Kelas Aktif" />
          <StatCard title="Rata-Rata per Kelas" value={totalKelas ? Math.round(totalSiswa / totalKelas) : 0} icon={TrendingUp} color="bg-amber-500" subtitle="Siswa per Kelas" />
          <StatCard title="Total Pelanggaran" value={violationStats.totalViolations} icon={AlertTriangle} color="bg-red-500" subtitle="Total Pelanggaran" />
        </div>

        {/* Charts and Lists */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <SiswaChart data={barData} />
          <GenderRatioChart data={pieData} />
          <TrenPelanggaran data={violationStats.monthlyViolations} />
          <TipePelanggaran data={violationStats.violationTypes} total={violationStats.totalViolations} />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <SeverityDistributionList data={violationStats.severityDistribution} />
          <TopViolatorsList data={violationStats.topViolators} />
        </div>

        <div>
          <BirthYearDistribution data={birthYearData} />
        </div>
      </div>
    </div>
  );
}