import axios from "axios";

class DesignResource {
  constructor(baseURL) {
    this.client = axios.create({
      baseURL: baseURL || "http://localhost:3000/api/design-resources",
      headers: { "Content-Type": "application/json" },
    });
  }

  // Fetch all categories
  async getCategories() {
    try {
      const response = await this.client.get("/categories");
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  }

  // Fetch all resources
  async getAllResources() {
    try {
      const response = await this.client.get("/resources");
      return response.data;
    } catch (error) {
      console.error("Error fetching resources:", error);
      throw error;
    }
  }

  // Fetch resources by category
  async getResourcesByCategory(category) {
    try {
      const response = await this.client.get(`/resources/category/${category}`);
      return response.data;
    } catch (error) {
      console.error(
        `Error fetching resources for category ${category}:`,
        error
      );
      throw error;
    }
  }
}

export default DesignResource;
