"use client";

import React, { useEffect, useState } from "react";
import Header from "../organisms/Header";
import RecipeList from "../organisms/RecipeList";
import ShareSection from "../organisms/ShareSection";
import InfoSection from "../organisms/InfoSection";
import Footer from "../organisms/Footer";
import MoreButton from "../atoms/MoreButton";
import Link from "next/link";
import { Recipe } from "@/types/recipe";

interface MainTemplateProps {
  recipes: Recipe[];
}

const MainTemplate: React.FC<MainTemplateProps> = ({ recipes }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100" suppressHydrationWarning>
      <div suppressHydrationWarning>
        <div className="relative w-full">
          <Header />
        </div>
        <main className="max-w-5xl mx-auto px-4">
          <section suppressHydrationWarning className="mb-10">
            <div className="flex justify-between items-center mt-10">
              <h3 className="font-bold text-[color:var(--custom-orange)] text-xl">
                Latest Recommendations
              </h3>
              <Link href="/recipes">
                <h2 className="text-sm text-gray-800 font-semibold hover:text-[color:var(--custom-orange)] cursor-pointer">
                  View All
                </h2>
              </Link>
            </div>
            <RecipeList recipes={recipes} />
          </section>
          <section>
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-[color:var(--custom-orange)] text-xl">
                Quick & Easy
              </h3>
              <Link href="/recipes">
                <h2 className="text-sm text-gray-800 font-semibold hover:text-[color:var(--custom-orange)] cursor-pointer">
                  View All
                </h2>
              </Link>
            </div>
            <RecipeList recipes={recipes} />
          </section>
        </main>
        <div suppressHydrationWarning className="my-10">
          <InfoSection />
        </div>
        <main className="max-w-5xl mx-auto px-4 mb-12">
          <section className="mb-10">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-[color:var(--custom-orange)] text-xl">
                Featured Recipes
              </h3>
              <Link href="/recipes">
                <h2 className="text-sm text-gray-800 font-semibold hover:text-[color:var(--custom-orange)] cursor-pointer">
                  View All
                </h2>
              </Link>
            </div>
            <RecipeList recipes={recipes} />
          </section>
          <div suppressHydrationWarning className="my-8">
            <ShareSection />
          </div>
          <section className="mb-10">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-[color:var(--custom-orange)] text-xl">
                Healthy Picks
              </h3>
              <Link href="/recipes">
                <h2 className="text-sm text-gray-800 font-semibold hover:text-[color:var(--custom-orange)] cursor-pointer">
                  View All
                </h2>
              </Link>
            </div>
            <RecipeList recipes={recipes} />
          </section>
          <section suppressHydrationWarning>
            <MoreButton />
          </section>
        </main>
        <div suppressHydrationWarning>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainTemplate;
