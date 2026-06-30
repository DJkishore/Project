import { title } from "process";
import "./globals.css";
import Navbar from "@/Components/Navbar";

export const metadata = {
  title: "CreativeStudio | Design Agency",
  description: "CreativeStudio Design Agency Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}