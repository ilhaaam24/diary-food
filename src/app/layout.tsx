// src/app/layout.tsx
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diary Food - Your Recipe Platform",
  description: "Discover, share, and create delicious recipes with Diary Food.",
  openGraph: {
    title: "Diary Food",
    description:
      "A vibrant community for food enthusiasts to explore and share recipes.",
    url: "/",
    images: ["/assets/images/og-image.jpg"],
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://be-diary-food.vercel.app/v1/"
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-poppins">
      <body className="font-poppins">
        {children}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          aria-label="Notifications"
        />
      </body>
    </html>
  );
}
