//layout.tsx

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>
      </nav>
      {children}
    </div>
  );
}
