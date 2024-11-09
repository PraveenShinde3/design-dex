// app/api/design-resources/route.js
import { supabase } from "@/utils/Db/supabaseClient";

export async function GET(req) {
  const url = new URL(req.url);
  const path = url.pathname;
  const categoryId = url.searchParams.get("categoryId");

  // Fetch all categories
  if (path === "/api/design-resources/categories") {
    const { data: categories, error } = await supabase
      .from("design_categories")
      .select("id, tag_name");

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }
    // console.log(categories);
    return new Response(JSON.stringify(categories), { status: 200 });
  }

  // Fetch all resources
  if (path === "/api/design-resources/resources") {
    const { data: resources, error } = await supabase.from("design_resources")
      .select(`
        id,
        name,
        cover_img,
        logo_img,
        link,
        created_at,
        category_id: design_categories (id,tag_name)
      `);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify(resources), { status: 200 });
  }

  // Fetch resources by category ID
  if (path === "/api/design-resources/resources-by-category" && categoryId) {
    const { data: resources, error } = await supabase
      .from("design_resources")
      .select("id, name,cover_img,logo_img,link,created_at")
      .eq("category_id", categoryId);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify(resources), { status: 200 });
  }

  // If no matching route, return 404
  return new Response(JSON.stringify({ error: "Route not found" }), {
    status: 404,
  });
}
