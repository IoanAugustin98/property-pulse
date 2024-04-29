import conectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async (request, { params }) => {
  try {
    await conectDB();
    const property = await Property.findById(params.id);
    if (!property) {
      return new Response("Property Not Found", { status: 404 });
    }
    // Adaugă header-ul Access-Control-Allow-Origin pentru a permite cererile CORS
    const headers = new Headers();
    headers.set("Access-Control-Allow-Origin", "http://localhost:3000");

    return new Response(JSON.stringify(property), {
      status: 200,
      headers,
    });
  } catch (error) {
    console.log(error);
    return new Response("Someting went wrong!", { status: 500 });
  }
};
