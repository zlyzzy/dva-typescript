let baseURL = "/api/";
if (process.env.NODE_ENV == "production") {
  baseURL = "http://localhost:7001/";
}
let otherURL = "";
export { otherURL };
export default baseURL;
