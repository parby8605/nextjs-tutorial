export default function Customers() {
  if (true) {
    throw new Error("일부러 발생시킨 에러");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-blue-300">Hello Dashboard</div>
    </main>
  );
}
