import React from "react";
import { RecipeDetail } from "@/types/recipe-detail";

interface InstructionsSectionProps {
  recipe: RecipeDetail;
  loading: boolean;
}

const InstructionsSection = ({ recipe, loading }: InstructionsSectionProps) => {
  if (loading) {
    return (
      <div className="min-h-auto w-full animate-pulse">
        <div className="rounded-2xl p-6">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4" />
          <ol className="space-y-4 mb-6">
            {[...Array(3)].map((_, idx) => (
              <li key={idx} className="flex gap-4">
                <div className="w-7 h-7 bg-gray-200 rounded-full" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
              </li>
            ))}
          </ol>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="h-5 bg-gray-200 rounded w-1/5 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-auto w-full">
      <div className="rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Instructions</h2>
        <ol className="space-y-4 mb-6">
          {Array.isArray(recipe.langkahList) &&
          recipe.langkahList.length > 0 ? (
            recipe.langkahList.map((step, idx) => (
              <li key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[color:var(--custom-orange)] text-white font-semibold text-sm">
                    {idx + 1}
                  </div>
                </div>
                <div className="text-gray-700 text-sm">{step.deskripsi}</div>
              </li>
            ))
          ) : (
            <li className="text-gray-400 text-sm">No instructions found.</li>
          )}
        </ol>
        <div className="mt-6 pt-6 border-t border-gray-100">
          <h3 className="text-base font-semibold text-gray-900 mb-2">Notes</h3>
          <p className="text-gray-600 text-sm italic">{recipe.note}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructionsSection;
