import conectDB from "@/config/config";

export const GET = async (request) => {
  try {
    await conectDB();
    return new Response(JSON.stringify({ message: "Hello word!" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Someting went wrong!", { status: 500 });
  }
};
