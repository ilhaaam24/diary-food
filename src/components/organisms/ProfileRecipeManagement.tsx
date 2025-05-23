"use client";

import React, { useState, useEffect } from "react";
import { DashboardCard } from "../molecules/DashboardCard";
import { useRouter } from "next/navigation";
import { ProfileRecipeTable } from "../molecules/ProfileRecipeTable";

interface Recipe {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  status: "published" | "draft";
}

export const ProfileRecipeManagement: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await fetch("/api/recipes");
      if (!response.ok) throw new Error("Failed to fetch recipes");
      const data = await response.json();

      // Transform the data to ensure id is a number
      const transformedData = data.map((recipe: any) => ({
        ...recipe,
        id: Number(recipe.id),
      }));
      setRecipes(transformedData);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleShow = (id: number) => {
    router.push(`/profile/my-recipe/edit/${id}`);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      try {
        const response = await fetch(`/api/recipes/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          setRecipes(recipes.filter((recipe) => recipe.id !== id));
        }
      } catch (error) {
        console.error("Error deleting recipe:", error);
      }
    }
  };

  return <DashboardCard title="Recipes List">{loading ? <div className="text-center py-4">Loading...</div> : <ProfileRecipeTable recipes={recipes} onShow={handleShow} onDelete={handleDelete} />}</DashboardCard>;
};
