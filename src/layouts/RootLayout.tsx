import "@/assets/globals.scss";
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      <header>
        <h1>Header do Site</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Footer do Site</p>
      </footer>
    </div>
  );
}
