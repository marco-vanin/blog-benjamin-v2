import "dotenv/config";

const PORT: string = process.env.PORT || "3000";
const MONGODB_URL: string = process.env.MONGODB_URL || "";

export { PORT, MONGODB_URL };
