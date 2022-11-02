import "../styles/globals.css";

export default function RootLayout({
  children,
}) // Layouts must accept a children prop.
// This will be populated with nested layouts or pages
{
  return (
    <html lang="en">
      <head>
        <title>LaunchIt PR Conference Tracker</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
