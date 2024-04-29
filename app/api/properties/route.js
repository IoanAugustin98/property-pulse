import conectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async (request) => {
  try {
    await conectDB();
    const properties = await Property.find({});
    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Someting went wrong!", { status: 500 });
  }
};
