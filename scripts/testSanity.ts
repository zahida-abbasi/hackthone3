import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "your_project_id", // Replace with your actual Sanity project ID
  dataset: "your_dataset", // Replace with your dataset name
  apiVersion: "2023-01-01", // Ensure this matches your API version
  token: "your_sanity_token", // Replace with a valid token
  useCdn: false,
});

async function testSanity() {
  try {
    const response = await sanityClient.create({
      _type: "order",
      name: "Test User",
      email: "test@example.com",
      address: "123 Test Street",
      createdAt: new Date().toISOString(),
    });
    console.log("Sanity response:", response);
  } catch (error) {
    console.error("Error connecting to Sanity:", error);
  }
}

testSanity();
