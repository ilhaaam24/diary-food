import React, { Suspense } from "react";
import Header from "../organisms/Header";
import RecipeList from "../organisms/RecipeList";
import ShareSection from "../organisms/ShareSection";
import InfoSection from "../organisms/InfoSection";
import Footer from "../organisms/Footer";
import MoreButton from "../atoms/MoreButton";
import Link from "next/link";
import { Recipe } from "@/types/recipe";
import RecipeTableSkeleton from "../skeletons/RecipeTableSkeleton";

interface MainTemplateProps {
  recipes: Recipe[];
}

const MainTemplate = ({ recipes }: MainTemplateProps) => (
  <div className="min-h-screen bg-gray-100" suppressHydrationWarning>
    <div suppressHydrationWarning>
      <div className="relative w-full">
        <Suspense fallback={null}>
          <Header />
        </Suspense>
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
          <Suspense fallback={<RecipeTableSkeleton />}>
            <RecipeList recipes={recipes} />
          </Suspense>
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
          <Suspense fallback={<RecipeTableSkeleton />}>
            <RecipeList recipes={recipes} />
          </Suspense>
        </section>
      </main>
      <div suppressHydrationWarning className="my-10">
        <Suspense fallback={null}>
          <InfoSection />
        </Suspense>
      </div>
      <main className="max-w-5xl mx-auto px-4 mb-12">
        <section className="mb-10">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-[color:var(--custom-orange)] text-xl">
              Regional Cuisine
            </h3>
            <Link href="/recipes">
              <h2 className="text-sm text-gray-800 font-semibold hover:text-[color:var(--custom-orange)] cursor-pointer">
                View All
              </h2>
            </Link>
          </div>
          <Suspense fallback={<RecipeTableSkeleton />}>
            <RecipeList recipes={recipes} />
          </Suspense>
        </section>
        <div suppressHydrationWarning className="my-8">
          <Suspense fallback={null}>
            <ShareSection />
          </Suspense>
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
          <Suspense fallback={<RecipeTableSkeleton />}>
            <RecipeList recipes={recipes} />
          </Suspense>
        </section>
        <section suppressHydrationWarning>
          <Suspense fallback={null}>
            <MoreButton />
          </Suspense>
        </section>
      </main>
      <div suppressHydrationWarning>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  </div>
);

export default MainTemplate;
