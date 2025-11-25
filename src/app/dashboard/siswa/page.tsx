export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-lg border shadow-sm">
          <h3 className="font-semibold">Selamat Datang</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Welcome to the Management System
          </p>
        </div>
      </div>
    </div>
  );
}