export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <h1>My Application</h1>
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>&copy; 2023 My Application</p>
      </footer>
    </div>
  );
}